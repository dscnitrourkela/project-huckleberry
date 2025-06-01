'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/projects/projects-card';
import { GitHubRepo } from '@/types/projects';
import { fetchRepos, getPublishedRepos } from '@/actions/projects';
import Loader from '@/components/shared/loader';

const bgColors = ['bg-blue-100', 'bg-yellow-50', 'bg-purple-50', 'bg-green-50'];

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
        console.log('Fetched repositories:', data);
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
      <section className="py-10 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="container mx-auto">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-red-500 text-lg">Error: {error}</p>
            <p className="mt-2">Please try refreshing the page.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className=" mx-auto">
        <div className="w-full mx-auto py-6 md:py-10 space-y-10 md:space-y-20">
          {repos.map((repo, index) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description || 'No description available'}
              count={repo.contributors?.length || 0}
              githubUrl={repo.html_url}
              bgColor={bgColors[index % bgColors.length]}
              contributors={repo.contributors}
            />
          ))}
          {repos.length === 0 && (
            <div className="text-center">
              <p className="text-lg">No published projects found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
