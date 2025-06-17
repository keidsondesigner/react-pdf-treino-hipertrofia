import React from 'react';
import { Printer } from 'lucide-react';
import Header from './Header';
import PDFInstructions from './PDFInstructions';
import WorkoutDay from './WorkoutDay';
import GoalsSection from './GoalsSection';
import ProgressSection from './ProgressSection';
import NotesSection from './NotesSection';

const WorkoutPlan: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const workoutDays = [
    {
      title: 'LEGS A (Domingo) - Foco Quadríceps e Posterior',
      emoji: '🦵',
      exercises: [
        { name: 'Cadeira extensora unilateral', series: '3', reps: '12–15' },
        { name: 'Cadeira extensora', series: '3', reps: '12–15' },
        { name: 'Leg Press', series: '4', reps: '10–12' },
        { name: 'Agachamento frontal', series: '4', reps: '8–10' },
        { name: 'Passada com (barra ou halter)', series: '4', reps: '8–10' },
        { name: 'Flexora deitada', series: '3', reps: '12–15' },
        { name: 'Panturrilha em pé', series: '4', reps: '15–20' }
      ]
    },
    {
      title: 'PUSH A (Segunda) - Peito, Ombros e Tríceps',
      emoji: '💪',
      exercises: [
        { name: 'Voador', series: '4', reps: '8–10' },
        { name: 'Supino reto (barra)', series: '4', reps: '8–10' },
        { name: 'Supino inclinado (halteres)', series: '4', reps: '10–12' },
        { name: 'Desenvolvimento ombro', series: '4', reps: '10–12' },
        { name: 'Elevação lateral', series: '3', reps: '12–15' },
        { name: 'Tríceps Testa', series: '3', reps: '10–12' },
        { name: 'Tríceps pulley', series: '3', reps: '12–15' }
      ]
    },
    {
      title: 'PULL A (Terça) - Costas e Bíceps',
      emoji: '🔙',
      exercises: [
        { name: 'Puxada alta aberta(pulley)', series: '4', reps: '6–8' },
        { name: 'Puxada alta fechada(pulley)', series: '4', reps: '6–8' },
        { name: 'Remada baixa aberta', series: '4', reps: '10–12' },
        { name: 'Remada baixa fechada', series: '4', reps: '10–12' },
        { name: 'Posteior de ombros', series: '3', reps: '12–15' },
        { name: 'Encolhimento ombros', series: '3', reps: '12–15' },
        { name: 'Rosca direta (barra)', series: '3', reps: '10–12' },
        { name: 'Rosca scott', series: '3', reps: '10–12' },
      ]
    },
    {
      title: 'LEGS B (Quinta) - Foco Glúteos e Variações',
      emoji: '🦵',
      exercises: [
        { name: 'Cadeira extensora unilateral', series: '3', reps: '12–15' },
        { name: 'Cadeira extensora', series: '3', reps: '12–15' },
        { name: 'Leg Press', series: '4', reps: '10–12' },
        { name: 'Agachamento frontal', series: '4', reps: '8–10' },
        { name: 'Passada com (barra ou halter)', series: '4', reps: '8–10' },
        { name: 'Flexora deitada', series: '3', reps: '12–15' },
        { name: 'Panturrilha em pé', series: '4', reps: '15–20' }
      ]
    },
    {
      title: 'PUSH B (Sexta) - Variações Push',
      emoji: '💪',
      exercises: [
        { name: 'Voador', series: '4', reps: '8–10' },
        { name: 'Supino reto (barra)', series: '4', reps: '8–10' },
        { name: 'Supino inclinado (halteres)', series: '4', reps: '10–12' },
        { name: 'Elevação frontal (ombro)', series: '3', reps: '10–12' },
        { name: 'Puxada baixa Barra (ombro)', series: '3', reps: '10–12' },
        { name: 'Tríceps testa', series: '3', reps: '10–12' },
        { name: 'Tríceps pulley', series: '3', reps: '12–15' }
      ]
    },
    {
      title: 'PULL B (Sábado) - Variações Pull',
      emoji: '🔙',
      exercises: [
        { name: 'Puxada alta aberta(pulley)', series: '4', reps: '6–8' },
        { name: 'Puxada alta fechada(pulley)', series: '4', reps: '6–8' },
        { name: 'Remada baixa aberta', series: '4', reps: '10–12' },
        { name: 'Remada baixa fechada', series: '4', reps: '10–12' },
        { name: 'Posteior de ombros', series: '3', reps: '12–15' },
        { name: 'Encolhimento ombros', series: '3', reps: '12–15' },
        { name: 'Alternada banco (halters)', series: '3', reps: '10–12' },
        { name: 'Rosca martelo', series: '3', reps: '12–15' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white print-container shadow-lg rounded-lg my-8">
      <div className="p-8">
        <Header />

        <PDFInstructions />

        {/* Print Button */}
        <div className="no-print flex justify-center gap-4 mb-8">
          <button
            onClick={handlePrint}
            className="print-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md"
          >
            <Printer size={20} />
            Gerar PDF
          </button>
        </div>

        {/* Legend - Primeira página */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-gray-700 font-semibold mb-2">📋 Legenda do Treino</h4>
          <p className="text-sm text-gray-600">
            <strong>Séries:</strong> Número de séries por exercício | <strong>Reps:</strong> Repetições por série | <strong>Carga:</strong> Peso utilizado
          </p>
          <p className="text-sm text-gray-600">
            <strong>Descanso:</strong> 60-90s para exercícios isolados, 2-3min para compostos
          </p>
        </div>

        {/* Workout Days - Cada treino em uma página separada */}
        {workoutDays.map((day, index) => (
          <div key={index} className={index > 0 ? "workout-section" : ""}>
            <WorkoutDay {...day} />
          </div>
        ))}

        {/* Goals Section - Nova página */}
        <div className="goals-section-print">
          <GoalsSection />
        </div>

        {/* Progress Section - Nova página */}
        <div className="progress-section-print">
          <ProgressSection />
        </div>

        {/* Notes Section - Nova página */}
        <div className="notes-section-print">
          <NotesSection />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-blue-600 text-center">
          <p className="text-sm text-gray-600">
            💡 <strong>Dicas importantes:</strong> Mantenha a regularidade, hidrate-se bem, tenha uma alimentação adequada e respeite o descanso entre os treinos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;