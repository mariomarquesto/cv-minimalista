import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">EDUCACIÓN</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">{edu.title}</h3>
          <p className="text-md text-gray-600">{edu.institution}, {edu.years}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
