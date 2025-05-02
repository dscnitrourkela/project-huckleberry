'use client';

import { GitHubRepo } from '@/types/projects';
import { ProjectCard } from '@/components/admin/projects/project-card';
import { useEffect, useState } from 'react';
import { fetchRepos, getPublishedRepos } from '@/actions/projects';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      const orgName = 'dscnitrourkela';
      try {
        const result = await getPublishedRepos();
        const published: { repo_id: string }[] =
          result && 'data' in result
            ? (result.data.data as { repo_id: string }[])
            : [];

        const data = await fetchRepos(orgName);
        const filteredRepos = data.filter((repo: GitHubRepo) =>
          published.some(
            (publishedRepo: { repo_id: string }) =>
              publishedRepo.repo_id === repo.id.toString()
          )
        );

        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setError(
          error instanceof Error ? error.message : 'Failed to load projects'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <AdminPageHeader accentTitle="All Projects" title="Projects" />
        <div className="text-center">
          <p className="text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <AdminPageHeader accentTitle="All Projects" title="Projects" />
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
          <p className="mt-2">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader accentTitle="All Projects" title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
