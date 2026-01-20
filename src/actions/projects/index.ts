'use server';

import { prisma } from '@/lib/prisma';
import { ApiResponse } from '@/types/commons';
import {
  GitHubRepo,
  GitHubContributor,
  ProjectWithGitHub,
} from '@/types/projects';
import { asyncHandler, handleSuccess } from '@/utils';
import { revalidatePath } from 'next/cache';
import { withAdminCheck } from '../events';

const GITHUB_API_URL = 'https://api.github.com';
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function fetchPaginatedData<T>(url: string, token: string): Promise<T[]> {
  const results: T[] = [];
  let nextUrl: string | null = url;

  while (nextUrl) {
    try {
      const response = await fetch(nextUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data: T[] = await response.json();
      results.push(...data);

      const linkHeader = response.headers.get('Link');
      const nextLink = linkHeader
        ?.split(',')
        .find((link) => link.includes('rel="next"'));
      nextUrl = nextLink ? nextLink.split(';')[0].trim().slice(1, -1) : null;
    } catch (error) {
      console.error('Error fetching paginated data:', error);
      throw error;
    }
  }

  return results;
}

export async function fetchContributors(
  repoFullName: string
): Promise<GitHubContributor[]> {
  if (!token) {
    throw new Error('GitHub token is not set in environment variables.');
  }

  const url = `${GITHUB_API_URL}/repos/${repoFullName}/contributors?per_page=100`;
  return fetchPaginatedData<GitHubContributor>(url, token);
}

export async function fetchRepos(
  orgName: string,
  withContributors: boolean = true
): Promise<GitHubRepo[]> {
  if (!token) {
    throw new Error('GitHub token is not set in environment variables.');
  }

  const url = `${GITHUB_API_URL}/orgs/${orgName}/repos?per_page=100&sort=created&direction=desc`;
  const repos = await fetchPaginatedData<GitHubRepo>(url, token);

  if (!withContributors) {
    return repos;
  }

  const reposWithContributors = await Promise.all(
    repos.map(async (repo) => {
      try {
        const contributors = await fetchContributors(repo.full_name);
        return {
          ...repo,
          contributors: Array.isArray(contributors) ? contributors : [],
        };
      } catch (error) {
        console.error(
          `Error fetching contributors for ${repo.full_name}:`,
          error
        );
        return { ...repo, contributors: [] };
      }
    })
  );

  return reposWithContributors.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export const publishRepos = asyncHandler(
  async (repos: { id: string; name: string }[]): Promise<ApiResponse> => {
    return await withAdminCheck(async () => {
      await prisma.project.createMany({
        data: repos.map((repo) => ({
          repo_id: repo.id,
          repo_name: repo.name,
        })),
        skipDuplicates: true,
      });

      revalidatePath('/projects');

      return handleSuccess({
        message: 'Repositories published successfully',
      });
    });
  }
);

export const getPublishedRepos = asyncHandler(async () => {
  const res = await prisma.project.findMany({
    orderBy: [{ display_order: 'asc' }, { published_at: 'desc' }],
  });
  if (!res) {
    return handleSuccess({
      data: [],
      message: null,
    });
  }
  return handleSuccess({
    data: res,
    message: null,
  });
});

export const unpublishRepos = asyncHandler(
  async (repoIds: string[]): Promise<ApiResponse> => {
    return await withAdminCheck(async () => {
      await prisma.project.deleteMany({
        where: {
          repo_id: {
            in: repoIds,
          },
        },
      });

      revalidatePath('/projects');
      return handleSuccess({
        message: 'Repository unpublished successfully',
      });
    });
  }
);

// Unified server action: fetches published projects from DB and merges with GitHub data
export const getPublishedProjectsWithGitHubData = asyncHandler(async () => {
  const publishedProjects = await prisma.project.findMany({
    orderBy: [{ display_order: 'asc' }, { published_at: 'desc' }],
  });

  if (!publishedProjects.length) {
    return handleSuccess({ data: [], message: null });
  }

  const orgName = 'dscnitrourkela';
  const allRepos = await fetchRepos(orgName, true);

  const projectsWithGitHub: ProjectWithGitHub[] = [];

  for (const project of publishedProjects) {
    const githubData = allRepos.find(
      (repo) => repo.id.toString() === project.repo_id
    );
    if (githubData) {
      projectsWithGitHub.push({
        ...githubData,
        imageUrl: project.image_url || undefined,
        displayOrder: project.display_order,
      });
    }
  }

  return handleSuccess({ data: projectsWithGitHub, message: null });
});

// Update project screenshot image URL
export const updateProjectImage = asyncHandler(
  async (repoId: string, imageUrl: string): Promise<ApiResponse> => {
    return await withAdminCheck(async () => {
      await prisma.project.update({
        where: { repo_id: repoId },
        data: { image_url: imageUrl },
      });
      revalidatePath('/projects');
      revalidatePath('/admin/manage-projects');
      return handleSuccess({ message: 'Project image updated successfully' });
    });
  }
);

// Update project display order
export const updateProjectOrder = asyncHandler(
  async (
    orderedRepoIds: { repoId: string; order: number }[]
  ): Promise<ApiResponse> => {
    return await withAdminCheck(async () => {
      await Promise.all(
        orderedRepoIds.map((item) =>
          prisma.project.update({
            where: { repo_id: item.repoId },
            data: { display_order: item.order },
          })
        )
      );
      revalidatePath('/projects');
      revalidatePath('/admin/manage-projects');
      return handleSuccess({ message: 'Project order updated successfully' });
    });
  }
);
