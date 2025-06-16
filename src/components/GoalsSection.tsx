import React from 'react';

const GoalsSection: React.FC = () => {
  const goals = [
    {
      muscle: 'Pernas (Legs)',
      goal: 'Aprimorar técnica no agachamento e aumentar 10% da carga até semana 6'
    },
    {
      muscle: 'Peito (Push)',
      goal: 'Estabilidade e controle no supino, +15% carga até semana 10'
    },
    {
      muscle: 'Costas (Pull)',
      goal: 'Executar barra fixa sem assistência até semana 8'
    },
    {
      muscle: 'Braços',
      goal: 'Aumento visível de volume em bíceps/tríceps'
    },
    {
      muscle: 'Panturrilhas',
      goal: 'Atingir 20+ reps com carga moderada, 2x por semana'
    }
  ];

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
      <h2 className="text-blue-800 text-xl font-semibold mb-4">
        <span className="mr-2">🎯</span>
        Metas por Grupo Muscular
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 text-left font-semibold border-b border-blue-200">
                Grupo Muscular
              </th>
              <th className="p-3 text-left font-semibold border-b border-blue-200">
                Meta até semana 12
              </th>
              <th className="p-3 text-left font-semibold border-b border-blue-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={index} className="hover:bg-blue-100 transition-colors">
                <td className="p-3 border-b border-blue-200">
                  <strong>{goal.muscle}</strong>
                </td>
                <td className="p-3 border-b border-blue-200">{goal.goal}</td>
                <td className="p-3 border-b border-blue-200">
                  <input
                    type="text"
                    className="load-input border-blue-400"
                    placeholder="Progresso"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoalsSection;