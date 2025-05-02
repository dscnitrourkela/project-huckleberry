import React from 'react';

export default function AdminFooter() {
  return (
    <footer className="pt-12 pb-8 text-center text-gdg-gray/70 text-sm ">
      <div className="w-full max-w-md h-1 rounded-full mx-auto mb-4 flex overflow-hidden">
        <div className="w-1/4 bg-gdg-blue"></div>
        <div className="w-1/4 bg-gdg-red"></div>
        <div className="w-1/4 bg-gdg-yellow"></div>
        <div className="w-1/4 bg-gdg-green"></div>
      </div>
      <p className="text-gdg-gray/70 font-geist-sans">
        © {new Date().getFullYear()} Google Developers Student Groups Rourkela
      </p>
    </footer>
  );
}
