'use client';

import { TableRepo } from '@/types/projects';
import { useEffect, useState } from 'react';
import { fetchRepos, getPublishedRepos } from '@/actions/projects';
import ReposPage from '@/components/admin/projects/repositary-table';
import { Loader2 } from 'lucide-react';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<TableRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [publishedRepos, setPublishedRepos] = useState<string[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const orgName = 'dscnitrourkela';
      try {
        const data = await fetchRepos(orgName, false);
        const result = await getPublishedRepos();
        const published: { repo_id: string }[] =
          result && 'data' in result
            ? (result.data.data as { repo_id: string }[])
            : [];
        setPublishedRepos(
          (published as { repo_id: string }[]).map((repo) => repo.repo_id)
        );

        const allRepos = data.map((repo) => ({
          id: String(repo.id),
          name: repo.name,
          description: repo.description || 'No description available',
          isSelected: published?.some(
            (published) => published.repo_id === String(repo.id)
          ),
        }));

        setRepos(allRepos as TableRepo[]);
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

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className=" mx-auto p-6 relative z-10 animate-fade-in-delay-1">
        <div className=" mx-auto">
          <AdminPageHeader accentTitle="Publish Projects" title="Projects" />

          {isLoading && (
            <div className="text-center py-16 animate-pulse">
              <div className="p-6 rounded-full bg-white/80 shadow-lg inline-block mb-4">
                <div className="w-12 h-12 border-4 border-gdg-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-lg font-geist-mono text-gdg-gray">
                Loading projects...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-16 animate-fade-in-delay-1">
              <div className="p-6 rounded-full bg-white/80 shadow-lg inline-block mb-4">
                <Loader2 size={48} />
              </div>
              <p className="text-red-500 text-lg font-geist-mono mb-2">
                Error: {error}
              </p>
              <p className="text-gdg-gray font-geist-mono">
                Please try refreshing the page.
              </p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mt-6 animate-fade-in-delay-2">
              <ReposPage repos={repos} publishedRepos={publishedRepos} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
