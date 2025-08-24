import React from 'react';


const PersonalInfo = ({ name, title, profileImage }) => {
  return (
    <div className="z-10 flex flex-col items-center md:items-start w-full">
      <img
        src={profileImage}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-4 mt-8"
      />
      <h1 className="text-4xl font-extrabold text-center md:text-left mb-2">{name}</h1>
      <p className="text-xl font-light text-center md:text-left text-teal-300 mb-6">{title}</p>
    </div>
  );
};

export default PersonalInfo;