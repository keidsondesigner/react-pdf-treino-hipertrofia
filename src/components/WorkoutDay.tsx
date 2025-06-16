import React from 'react';

interface Exercise {
  name: string;
  series: string;
  reps: string;
}

interface WorkoutDayProps {
  title: string;
  emoji: string;
  exercises: Exercise[];
}

const WorkoutDay: React.FC<WorkoutDayProps> = ({ title, emoji, exercises }) => {
  return (
    <div className="mb-6 border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
        <h3 className="text-lg font-bold">
          <span className="mr-2 text-xl">{emoji}</span>
          {title}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 text-left font-semibold border-b-2 border-gray-200">Exercício</th>
              <th className="p-3 text-left font-semibold border-b-2 border-gray-200">Séries</th>
              <th className="p-3 text-left font-semibold border-b-2 border-gray-200">Reps</th>
              <th className="p-3 text-left font-semibold border-b-2 border-gray-200">Carga Usada</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border-b border-gray-200">
                  <strong>{exercise.name}</strong>
                </td>
                <td className="p-3 border-b border-gray-200">{exercise.series}</td>
                <td className="p-3 border-b border-gray-200">{exercise.reps}</td>
                <td className="p-3 border-b border-gray-200">
                  <input
                    type="text"
                    className="load-input w-full"
                    placeholder="kg"
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

export default WorkoutDay;