'use client';
import Members from '@/components/teams/members';
import TeamHeader from '@/components/teams/team-header';
import BatchFilter from '@/components/teams/batch-filter';
import { TEAM_MEMBERS } from '@/config/teams';
import React, { useState, useMemo } from 'react';

export default function Page() {
  const [selectedBatch, setSelectedBatch] = useState<string>('all');

  const availableBatches = [
    ...new Set(TEAM_MEMBERS.map((member) => member.batch)),
  ].filter(Boolean) as string[];
  const sortedBatches = [...availableBatches].sort((a, b) =>
    b.localeCompare(a)
  );
  const filterOptions = ['all', ...sortedBatches];

  const filteredMembers = useMemo(() => {
    let members = [...TEAM_MEMBERS];

    if (selectedBatch !== 'all') {
      members = members.filter((member) => member.batch === selectedBatch);

      members.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      members.sort((a, b) => {
        if (!a.batch) return 1;
        if (!b.batch) return -1;

        const batchComparison = a.batch.localeCompare(b.batch);

        if (batchComparison === 0) {
          return a.name.localeCompare(b.name);
        }

        return batchComparison;
      });
    }

    return members;
  }, [selectedBatch]);

  const isAllBatchesSelected = selectedBatch === 'all';

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

      <Members teamMembers={filteredMembers} showBatch={isAllBatchesSelected} />
    </main>
  );
}
