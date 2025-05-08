import React from 'react';
import { FilterIcon } from 'lucide-react';

interface BatchFilterProps {
  years: string[];
  selectedBatch: string;
  setSelectedBatch: (batch: string) => void;
}

const BatchFilter: React.FC<BatchFilterProps> = ({
  years,
  selectedBatch,
  setSelectedBatch,
}) => {
  return (
    <div className="flex items-center flex-wrap gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-[#F6F6F6]">
        <FilterIcon size={20} className="text-gray-700" />
      </div>

      {years.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedBatch(year)}
          className={`px-4 py-2 rounded-md border transition-all duration-300 font-dm ${
            selectedBatch === year
              ? 'border-blue-500 bg-blue-50 text-[#4285F4] font-medium'
              : 'border-gray-300 bg-white text-[#A6A6A6] hover:bg-gray-100'
          }`}
        >
          {year === 'all' ? 'All Batches' : `Batch ${year}`}
        </button>
      ))}
    </div>
  );
};

export default BatchFilter;
