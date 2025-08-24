import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">EXPERIENCIA</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">{job.position}</h3>
          <p className="text-md text-gray-600 italic">{job.company}, {job.period}</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
            {job.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
