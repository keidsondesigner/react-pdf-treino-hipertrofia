import React from 'react';

const ProgressSection: React.FC = () => {
  const weeks = [
    { week: 1, objective: 'Adaptação', load: '80–85%' },
    { week: 2, objective: 'Progressão', load: '85–90%' },
    { week: 3, objective: 'Progressão', load: '90–95%' },
    { week: 4, objective: 'Progressão', load: '95–100%' },
    { week: 5, objective: 'Máximas', load: '100%' },
    { week: 6, objective: 'Progressão', load: '100–105%' },
    { week: 7, objective: 'DELOAD', load: '50–60%', isDeload: true },
    { week: 8, objective: 'Retomada', load: '85–90%' },
    { week: 9, objective: 'Progressão', load: '90–95%' },
    { week: 10, objective: 'Progressão', load: '95–100%' },
    { week: 11, objective: 'Pico', load: '100–105%' },
    { week: 12, objective: 'DELOAD', load: '50–60%', isDeload: true }
  ];

  return (
    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
      <h2 className="text-yellow-800 text-xl font-semibold mb-4">
        <span className="mr-2">📈</span>
        Plano de Progressão Semanal (12 Semanas)
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-yellow-100">
              <th className="p-3 text-center font-semibold border-b border-yellow-200">
                Semana
              </th>
              <th className="p-3 text-center font-semibold border-b border-yellow-200">
                Objetivo
              </th>
              <th className="p-3 text-center font-semibold border-b border-yellow-200">
                Carga (%)
              </th>
              <th className="p-3 text-center font-semibold border-b border-yellow-200">
                Observações
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr 
                key={index} 
                className={`hover:bg-yellow-100 transition-colors ${
                  week.isDeload ? 'deload' : ''
                }`}
              >
                <td className="p-3 text-center border-b border-yellow-200">
                  {week.week}
                </td>
                <td className={`p-3 text-center border-b border-yellow-200 ${
                  week.isDeload ? 'font-bold' : ''
                }`}>
                  {week.objective}
                </td>
                <td className="p-3 text-center border-b border-yellow-200">
                  {week.load}
                </td>
                <td className="p-3 border-b border-yellow-200">
                  <input
                    type="text"
                    className="load-input border-yellow-400"
                    placeholder={week.isDeload ? "Descanso ativo" : "Notas"}
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

export default ProgressSection;