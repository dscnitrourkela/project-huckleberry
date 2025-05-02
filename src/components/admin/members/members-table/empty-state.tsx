import React from 'react';

const EmptyState: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border shadow-sm">
    <div className="p-4 rounded-full bg-gdg-blue/10 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gdg-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
    <p className="text-gdg-gray text-lg">No members found.</p>
    <p className="text-gdg-gray/70 text-sm mt-1">
      Add members to see them listed here
    </p>
  </div>
);

export default EmptyState;
