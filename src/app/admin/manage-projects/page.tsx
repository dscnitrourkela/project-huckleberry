'use client';

import { TableRepo } from '@/types/projects';
import { useEffect, useState } from 'react';
import { fetchRepos, getPublishedRepos } from '@/actions/projects';
import ReposPage from '@/components/admin/projects/repositary-table';
import { Loader2 } from 'lucide-react';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';
import Loader from '@/components/shared/loader';

interface PublishedRepo {
  repo_id: string;
  image_url?: string;
  display_order?: number;
}

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
        const published: PublishedRepo[] =
          result && 'data' in result
            ? (result.data.data as PublishedRepo[])
            : [];
        setPublishedRepos(published.map((repo) => repo.repo_id));

        const allRepos = data.map((repo) => {
          const publishedRepo = published.find(
            (p) => p.repo_id === String(repo.id)
          );
          return {
            id: String(repo.id),
            name: repo.name,
            description: repo.description || 'No description available',
            isSelected: !!publishedRepo,
            imageUrl: publishedRepo?.image_url || undefined,
            displayOrder: publishedRepo?.display_order ?? 999,
          };
        });

        // Sort by display order for selected repos
        allRepos.sort((a, b) => {
          if (a.isSelected && b.isSelected) {
            return (a.displayOrder ?? 999) - (b.displayOrder ?? 999);
          }
          if (a.isSelected) return -1;
          if (b.isSelected) return 1;
          return 0;
        });

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

          {isLoading && <Loader />}

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
            <div className=" mt-6 animate-fade-in-delay-2">
              <ReposPage repos={repos} publishedRepos={publishedRepos} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
