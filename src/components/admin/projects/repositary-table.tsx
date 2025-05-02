'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TableRepo } from '@/types/projects';
import { publishRepos, unpublishRepos } from '@/actions/projects';
import { withLoadingToast } from '@/utils';
import { ApiResponse } from '@/types/commons';
import { Search } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

interface ReposPageProps {
  repos: TableRepo[];
  publishedRepos: string[];
}

export default function ReposPage({
  repos: initialRepos,
  publishedRepos,
}: ReposPageProps) {
  const [repos, setRepos] = useState<TableRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();
  useEffect(() => {
    setRepos(initialRepos);
  }, [initialRepos]);

  const toggleSelection = (id: string) => {
    if (user?.role !== 'admin') return;
    setRepos((prevRepos) =>
      prevRepos.map((repo) =>
        repo.id === id ? { ...repo, isSelected: !repo.isSelected } : repo
      )
    );
  };

  const handlePublish = withLoadingToast(async (): Promise<ApiResponse> => {
    setIsLoading(true);
    const selectedRepos = repos
      .filter((repo) => repo.isSelected)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
      }));

    if (selectedRepos.length === 0) {
      return {
        status: 'error',
        message: 'No repositories selected',
        statusCode: 400,
      };
    }

    const reposToUnpublish = publishedRepos.filter(
      (repo_id) => !selectedRepos.some((repo) => repo.id === repo_id)
    );

    await unpublishRepos(reposToUnpublish);
    const result = await publishRepos(selectedRepos);
    setIsLoading(false);

    return result;
  });

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-geist-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-geist-mono font-bold text-gdg-dark mb-1">
            GitHub Repositories
          </h2>
          <p className="text-gdg-gray">
            Select repositories to publish on the website
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gdg-gray h-4 w-4" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-white/70 focus:ring-2 focus:ring-gdg-blue focus:outline-none w-full sm:w-64 font-geist-sans"
            />
          </div>

          {user?.role === 'admin' && (
            <Button
              onClick={handlePublish}
              disabled={isLoading}
              className="bg-gdg-blue hover:bg-gdg-blue/90 text-white rounded-full transition-all px-6 py-2 font-medium"
            >
              {isLoading ? 'Publishing...' : 'Publish Selected'}
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="font-geist-sans text-gdg-gray">
                <th className="px-6 py-4 text-left text-sm font-medium">
                  Repository Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium w-24">
                  Published
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo) => (
                  <tr
                    key={repo.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleSelection(repo.id)}
                  >
                    <td className="px-6 py-4 font-geist-mono font-medium">
                      {repo.name}
                    </td>
                    <td className="px-6 py-4 text-gdg-gray">
                      {repo.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <Checkbox
                          checked={repo.isSelected}
                          className="border-2 border-gdg-blue data-[state=checked]:bg-gdg-blue data-[state=checked]:border-gdg-blue h-5 w-5 rounded"
                          onCheckedChange={() => toggleSelection(repo.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-gdg-gray"
                  >
                    {searchQuery
                      ? 'No repositories match your search'
                      : 'No repositories available'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 text-sm text-gdg-gray">
          {filteredRepos.length} repositories •{' '}
          {repos.filter((r) => r.isSelected).length} selected
        </div>
      </div>
    </div>
  );
}
