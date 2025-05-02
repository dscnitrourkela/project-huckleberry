import React, { useEffect } from 'react';
import GoogleColorsBar from '@/components/shared/google-colors-bar';

interface AdminPageHeaderProps {
  accentTitle?: string;
  title: string;
  description?: string;
}

export default function AdminPageHeader({
  accentTitle,
  title,
  description,
}: AdminPageHeaderProps) {
  useEffect(() => {
    const pageTitle = `${title} | GDSC Admin`;
    document.title = pageTitle;
  }, [accentTitle, title]);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-geist-mono tracking-tight">
          {accentTitle && <span className="text-gdg-dark">{accentTitle} </span>}
        </h1>
        {description && (
          <p className="text-muted-foreground mb-8">{description}</p>
        )}
      </div>
      <GoogleColorsBar />
    </>
  );
}
