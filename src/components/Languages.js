import React from 'react';

const Languages = ({ languages }) => {
  return (
    <div className="z-10 w-full flex flex-col gap-4 mt-6 mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">IDIOMAS</h2>
      <ul className="list-none space-y-2">
        {languages.map((lang, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <span>{lang.name}</span>
            <span className="text-teal-400">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
