import React from 'react';

interface MemberAvatarProps {
  src: string;
  alt: string;
}

const MemberAvatar: React.FC<MemberAvatarProps> = ({ src, alt }) => (
  <div className="relative w-10 h-10">
    {/* eslint-disable-next-line */}
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover border-2 border-white shadow-sm w-10 h-10"
    />
  </div>
);

export default MemberAvatar;
