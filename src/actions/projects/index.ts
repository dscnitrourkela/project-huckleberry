'use server';

import { prisma } from '@/lib/prisma';
import { ApiResponse } from '@/types/commons';
import { GitHubRepo, GitHubContributor } from '@/types/projects';
import { handleError, handleSuccess } from '@/utils';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '../auth';

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

      // Handle pagination
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
        return { ...repo, contributors };
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

export async function publishRepos(
  repos: { id: string; name: string }[]
): Promise<ApiResponse> {
  try {
    if (!(await isAdmin()))
      return handleError({
        message: 'You are not authorized to perform this action',
      });
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
  } catch (error) {
    return handleError(error);
  }
}

export async function getPublishedRepos() {
  try {
    const res = await prisma.project.findMany({
      orderBy: {
        published_at: 'desc',
      },
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
  } catch (error) {
    return handleError(error);
  }
}

export async function unpublishRepos(repoIds: string[]): Promise<ApiResponse> {
  try {
    if (!(await isAdmin()))
      return handleError({
        message: 'You are not authorized to perform this action',
      });
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
  } catch (error) {
    return handleError(error);
  }
}
