'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Members from '@/components/teams/members';
import TeamHeader from '@/components/teams/team-header';
import BatchFilter from '@/components/teams/batch-filter';
import { getAllMembers } from '@/actions/members';
import { Member } from '@/types/admin/members';
import { TeamMember, Social, MembersResponse } from '@/types/team';
import Loader from '@/components/shared/loader';
import { Metadata } from 'next';

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
    }

    members.sort((a, b) => {
      if (!a.batch && !b.batch) return a.name.localeCompare(b.name);
      if (!a.batch) return 1;
      if (!b.batch) return -1;

      const batchComparison = b.batch.localeCompare(a.batch);
      return batchComparison !== 0
        ? batchComparison
        : a.name.localeCompare(b.name);
    });

    return members;
  }, [selectedBatch, displayedMembers]);

  const isAllBatchesSelected = selectedBatch === 'all';

  if (isLoading) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-12 max-w-7xl"
      >
        <TeamHeader />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Loader />
        </motion.div>
      </motion.main>
    );
  }

  if (error) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-12 max-w-7xl"
      >
        <TeamHeader />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center min-h-[400px]"
        >
          <div className="text-red-500">{error}</div>
        </motion.div>
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-7xl"
    >
      <TeamHeader />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 mt-12"
      >
        <BatchFilter
          years={filterOptions}
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedBatch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Members
            teamMembers={filteredMembers}
            showBatch={isAllBatchesSelected}
          />
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}
