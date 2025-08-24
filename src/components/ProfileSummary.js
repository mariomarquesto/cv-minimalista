import React from 'react';

const ProfileSummary = ({ text }) => {
  return (
    <p className="text-gray-700 leading-relaxed text-md mb-6">
      {text}
    </p>
  );
};

export default ProfileSummary;
