import React, { useState } from 'react';

const Header: React.FC = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');

  return (
    <div className="text-center mb-8 pb-6 border-b-4 border-blue-600">
      <h1 className="text-blue-600 text-3xl md:text-4xl font-bold mb-2">
        💪 TREINO DE HIPERTROFIA PPL
      </h1>
      <p className="text-gray-600 text-lg mb-4">Programa de 12 Semanas - Push Pull Legs</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <strong className="text-gray-700">Nome:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b-2 border-blue-600 bg-transparent px-2 py-1 min-w-[200px] focus:outline-none focus:border-blue-800"
            placeholder="Seu nome aqui"
          />
        </div>
        <div className="flex items-center gap-2">
          <strong className="text-gray-700">Início:</strong>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border-b-2 border-blue-600 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;