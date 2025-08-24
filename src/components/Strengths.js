import React from 'react';
// No se necesitan iconos de Lucide React aquí, ya que solo se usa un span para el checkmark.

const Strengths = ({ strengths }) => {
  return (
    <div className="z-10 w-full flex flex-col gap-4 mt-6">
      <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">FORTALEZAS</h2>
      <ul className="list-none space-y-2">
        {strengths.map((strength, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="text-teal-400">✓</span> {strength}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Strengths;
