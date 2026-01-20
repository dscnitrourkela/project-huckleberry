'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TableRepo } from '@/types/projects';
import {
  publishRepos,
  unpublishRepos,
  updateProjectImage,
  updateProjectOrder,
} from '@/actions/projects';
import { withLoadingToast, uploadToCloudinary } from '@/utils';
import { ApiResponse } from '@/types/commons';
import {
  Search,
  Upload,
  X,
  ImageIcon,
  Loader2,
  GripVertical,
} from 'lucide-react';
import { useAdmin } from '@/hooks/useAdmin';
import { toast } from 'sonner';

interface ReposPageProps {
  repos: TableRepo[];
  publishedRepos: string[];
}

export default function ReposPage({
  repos: initialRepos,
  publishedRepos,
}: ReposPageProps) {
  const [repos, setRepos] = useState<TableRepo[]>([]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadingRepoId, setUploadingRepoId] = useState<string | null>(null);
  const { isAdmin, isLoading: isAdminLoading } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedRepoForUpload, setSelectedRepoForUpload] = useState<
    string | null
  >(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [isSavingOrder, setIsSavingOrder] = useState(false);

  useEffect(() => {
    setRepos(initialRepos);
  }, [initialRepos]);

  const toggleSelection = (id: string) => {
    if (!isAdmin) return;
    setRepos((prevRepos) =>
      prevRepos.map((repo) =>
        repo.id === id ? { ...repo, isSelected: !repo.isSelected } : repo
      )
    );
  };

  // Drag and drop handlers for reordering
  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedId || draggedId === targetId) return;

    const publishedReposList = repos.filter((r) => r.isSelected);
    const draggedIndex = publishedReposList.findIndex(
      (r) => r.id === draggedId
    );
    const targetIndex = publishedReposList.findIndex((r) => r.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    // Reorder the repos
    const newRepos = [...repos];
    const publishedIds = publishedReposList.map((r) => r.id);

    // Remove dragged from its position
    const newPublishedOrder = [...publishedIds];
    newPublishedOrder.splice(draggedIndex, 1);
    newPublishedOrder.splice(targetIndex, 0, draggedId);

    // Update displayOrder for all published repos
    const reorderedRepos = newRepos.map((repo) => {
      if (repo.isSelected) {
        const newOrder = newPublishedOrder.indexOf(repo.id);
        return { ...repo, displayOrder: newOrder };
      }
      return repo;
    });

    // Sort so published repos appear in order
    reorderedRepos.sort((a, b) => {
      if (a.isSelected && b.isSelected) {
        return (a.displayOrder ?? 999) - (b.displayOrder ?? 999);
      }
      if (a.isSelected) return -1;
      if (b.isSelected) return 1;
      return 0;
    });

    setRepos(reorderedRepos);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
  };

  const saveOrder = async () => {
    if (!isAdmin) return;
    setIsSavingOrder(true);
    try {
      const publishedReposList = repos.filter((r) => r.isSelected);
      const orderedRepoIds = publishedReposList.map((repo, index) => ({
        repoId: repo.id,
        order: index,
      }));
      const result = await updateProjectOrder(orderedRepoIds);
      if (result && 'status' in result && result.status === 'success') {
        toast.success('Project order saved successfully');
      } else {
        toast.error('Failed to save project order');
      }
    } catch (error) {
      console.error('Error saving order:', error);
      toast.error('Failed to save project order');
    } finally {
      setIsSavingOrder(false);
    }
  };

  const handlePublish = withLoadingToast(async (): Promise<ApiResponse> => {
    setIsPublishing(true);
    const selectedRepos = repos
      .filter((repo) => repo.isSelected)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
      }));

    if (selectedRepos.length === 0) {
      setIsPublishing(false);
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
    setIsPublishing(false);

    return result;
  });

  const handleImageUploadClick = (repoId: string) => {
    setSelectedRepoForUpload(repoId);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedRepoForUpload) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setUploadingRepoId(selectedRepoForUpload);

    try {
      // Upload to Cloudinary
      const imageUrl = await uploadToCloudinary(file);

      // Update in database
      const result = await updateProjectImage(selectedRepoForUpload, imageUrl);

      if (result && 'status' in result && result.status === 'success') {
        // Update local state
        setRepos((prevRepos) =>
          prevRepos.map((repo) =>
            repo.id === selectedRepoForUpload ? { ...repo, imageUrl } : repo
          )
        );
        toast.success('Project image updated successfully');
      } else {
        toast.error('Failed to update project image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploadingRepoId(null);
      setSelectedRepoForUpload(null);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = async (repoId: string) => {
    setUploadingRepoId(repoId);
    try {
      const result = await updateProjectImage(repoId, '');
      if (result && 'status' in result && result.status === 'success') {
        setRepos((prevRepos) =>
          prevRepos.map((repo) =>
            repo.id === repoId ? { ...repo, imageUrl: undefined } : repo
          )
        );
        toast.success('Project image removed');
      }
    } catch (error) {
      console.error('Error removing image:', error);
      toast.error('Failed to remove image');
    } finally {
      setUploadingRepoId(null);
    }
  };

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-gdg-gray">Loading admin status...</div>
      </div>
    );
  }

  return (
    <div className="font-geist-sans">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

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

          {isAdmin && (
            <>
              <Button
                onClick={saveOrder}
                disabled={isSavingOrder}
                className="bg-gdg-green hover:bg-gdg-green/90 text-white rounded-full transition-all px-6 py-2 font-medium"
              >
                {isSavingOrder ? 'Saving...' : 'Save Order'}
              </Button>
              <Button
                onClick={handlePublish}
                disabled={isPublishing}
                className="bg-gdg-blue hover:bg-gdg-blue/90 text-white rounded-full transition-all px-6 py-2 font-medium"
              >
                {isPublishing ? 'Publishing...' : 'Publish Selected'}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="font-geist-sans text-gdg-gray">
                <th className="px-2 py-4 text-center text-sm font-medium w-12">
                  Order
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium">
                  Repository Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium w-32">
                  Screenshot
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
                    className={`hover:bg-gray-50 transition-colors ${draggedId === repo.id ? 'opacity-50' : ''}`}
                    draggable={repo.isSelected && isAdmin}
                    onDragStart={(e) => handleDragStart(e, repo.id)}
                    onDragOver={(e) => handleDragOver(e, repo.id)}
                    onDragEnd={handleDragEnd}
                  >
                    <td className="px-2 py-4 text-center">
                      {repo.isSelected && isAdmin ? (
                        <div className="cursor-grab active:cursor-grabbing flex justify-center">
                          <GripVertical className="w-5 h-5 text-gdg-gray" />
                        </div>
                      ) : repo.isSelected ? (
                        <span className="text-sm text-gdg-gray">
                          {(repo.displayOrder ?? 0) + 1}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-geist-mono font-medium">
                      {repo.name}
                    </td>
                    <td className="px-6 py-4 text-gdg-gray">
                      {repo.description}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center">
                        {repo.isSelected ? (
                          uploadingRepoId === repo.id ? (
                            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
                              <Loader2 className="w-6 h-6 animate-spin text-gdg-blue" />
                            </div>
                          ) : repo.imageUrl ? (
                            <div className="relative group">
                              <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                                <Image
                                  src={repo.imageUrl}
                                  alt={`${repo.name} screenshot`}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              {isAdmin && (
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleImageUploadClick(repo.id);
                                    }}
                                    className="p-1 bg-white rounded-full hover:bg-gray-100"
                                    title="Change image"
                                  >
                                    <Upload className="w-3 h-3 text-gdg-blue" />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRemoveImage(repo.id);
                                    }}
                                    className="p-1 bg-white rounded-full hover:bg-gray-100"
                                    title="Remove image"
                                  >
                                    <X className="w-3 h-3 text-red-500" />
                                  </button>
                                </div>
                              )}
                            </div>
                          ) : isAdmin ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleImageUploadClick(repo.id);
                              }}
                              className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:border-gdg-blue hover:bg-blue-50 transition-colors"
                              title="Upload screenshot"
                            >
                              <ImageIcon className="w-5 h-5 text-gdg-gray mb-1" />
                              <span className="text-[10px] text-gdg-gray">
                                Upload
                              </span>
                            </button>
                          ) : (
                            <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg">
                              <ImageIcon className="w-5 h-5 text-gdg-gray" />
                            </div>
                          )
                        ) : (
                          <span className="text-xs text-gdg-gray">
                            Publish first
                          </span>
                        )}
                      </div>
                    </td>
                    <td
                      onClick={() => toggleSelection(repo.id)}
                      className="px-6 py-4 cursor-pointer"
                    >
                      <div onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={repo.isSelected}
                          onCheckedChange={() => toggleSelection(repo.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
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
