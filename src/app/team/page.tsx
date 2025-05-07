'use client';
import Members from '@/components/teams/members';
import TeamHeader from '@/components/teams/team-header';
import BatchFilter from '@/components/teams/batch-filter';
import { getAllMembers } from '@/actions/members';
import React, { useState, useMemo, useEffect } from 'react';
import { Member } from '@/types/admin/members';
import { TeamMember, Social, MembersResponse } from '@/types/team';
import Loader from '@/components/ui/loader';

const transformMemberToTeamMember = (member: Member): TeamMember => {
  const socials: Social[] = [];
  if (member.github) {
    socials.push({
      name: 'GitHub',
      url: member.github,
      icon: 'github',
    });
  }
  if (member.linkedin) {
    socials.push({
      name: 'LinkedIn',
      url: member.linkedin,
      icon: 'linkedin',
    });
  }
  if (member.twitter) {
    socials.push({
      name: 'Twitter',
      url: member.twitter,
      icon: 'twitter',
    });
  }
  if (member.figma) {
    socials.push({
      name: 'Figma',
      url: member.figma,
      icon: 'figma',
    });
  }

  return {
    id: member.id,
    name: member.user_name,
    quote: member.caption || '',
    photo: member.profile_photo || '',
    batch: member.year_of_passing?.toString(),
    role: member.role,
    socials,
    isLead: member.is_lead,
  };
};

export default function Page() {
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [displayedMembers, setDisplayedMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const result = (await getAllMembers()) as MembersResponse;
        if (result.status === 'success' && result.data?.data) {
          const transformedMembers = result.data.data.map(
            transformMemberToTeamMember
          );
          setDisplayedMembers(transformedMembers);
        } else {
          setError(result.message || 'Failed to fetch team members');
        }
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to fetch team members');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const availableBatches = [
    ...new Set(displayedMembers.map((member) => member.batch)),
  ].filter(Boolean) as string[];
  const sortedBatches = [...availableBatches].sort((a, b) =>
    b.localeCompare(a)
  );
  const filterOptions = ['all', ...sortedBatches];

  const filteredMembers = useMemo(() => {
    let members = [...displayedMembers];

    if (selectedBatch !== 'all') {
      members = members.filter((member) => member.batch === selectedBatch);
      members.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      members.sort((a, b) => {
        if (!a.batch) return 1;
        if (!b.batch) return -1;

        const batchComparison = b.batch.localeCompare(a.batch);

        if (batchComparison === 0) {
          return a.name.localeCompare(b.name);
        }

        return batchComparison;
      });
    }

    return members;
  }, [selectedBatch, displayedMembers]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedMembers(filteredMembers);
    }, 300);

    return () => clearTimeout(timer);
  }, [filteredMembers]);

  const isAllBatchesSelected = selectedBatch === 'all';

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <TeamHeader />
        <Loader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <TeamHeader />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-red-500">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <TeamHeader />

      <div className="mb-8 mt-12">
        <BatchFilter
          years={filterOptions}
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
        />
      </div>

      <div className={`transition-opacity duration-300 `}>
        <Members
          teamMembers={displayedMembers}
          showBatch={isAllBatchesSelected}
        />
      </div>
    </main>
  );
}
