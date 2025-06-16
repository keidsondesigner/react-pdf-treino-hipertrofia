import React, { useState } from 'react';

const NotesSection: React.FC = () => {
  const [generalNotes, setGeneralNotes] = useState('');
  const [measurements, setMeasurements] = useState({
    initialWeight: '',
    finalWeight: '',
    initialArm: '',
    finalArm: '',
    initialChest: '',
    finalChest: '',
    initialThigh: '',
    finalThigh: '',
    initialWaist: '',
    finalWaist: ''
  });

  const handleMeasurementChange = (field: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>

      {/* Measurements */}
      <div className="bg-gray-100 p-6 rounded-lg border border-dashed border-gray-400 mb-6">
        <h3 className="text-gray-700 font-semibold mb-4">🏆 Medidas e Progresso</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Peso inicial:</strong>
            <input
              type="text"
              value={measurements.initialWeight}
              onChange={(e) => handleMeasurementChange('initialWeight', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-20 focus:outline-none focus:border-blue-600"
              placeholder="kg"
            />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Peso final:</strong>
            <input
              type="text"
              value={measurements.finalWeight}
              onChange={(e) => handleMeasurementChange('finalWeight', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-20 focus:outline-none focus:border-blue-600"
              placeholder="kg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Braço:</strong>
            <input
              type="text"
              value={measurements.initialArm}
              onChange={(e) => handleMeasurementChange('initialArm', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
            <span>→</span>
            <input
              type="text"
              value={measurements.finalArm}
              onChange={(e) => handleMeasurementChange('finalArm', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Peito:</strong>
            <input
              type="text"
              value={measurements.initialChest}
              onChange={(e) => handleMeasurementChange('initialChest', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
            <span>→</span>
            <input
              type="text"
              value={measurements.finalChest}
              onChange={(e) => handleMeasurementChange('finalChest', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Coxa:</strong>
            <input
              type="text"
              value={measurements.initialThigh}
              onChange={(e) => handleMeasurementChange('initialThigh', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
            <span>→</span>
            <input
              type="text"
              value={measurements.finalThigh}
              onChange={(e) => handleMeasurementChange('finalThigh', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-gray-700">Cintura:</strong>
            <input
              type="text"
              value={measurements.initialWaist}
              onChange={(e) => handleMeasurementChange('initialWaist', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
            <span>→</span>
            <input
              type="text"
              value={measurements.finalWaist}
              onChange={(e) => handleMeasurementChange('finalWaist', e.target.value)}
              className="border-b-2 border-gray-400 bg-transparent px-2 py-1 w-16 focus:outline-none focus:border-blue-600"
              placeholder="cm"
            />
          </div>
        </div>
      </div>

      {/* General Notes */}
      <div className="bg-gray-100 p-6 rounded-lg border border-dashed border-gray-400 mb-6">
        <h3 className="text-gray-700 font-semibold mb-4">📝 Anotações Gerais</h3>
        <textarea
          value={generalNotes}
          onChange={(e) => setGeneralNotes(e.target.value)}
          className="notes-area w-full border border-gray-300 rounded p-3 font-inherit resize-y focus:outline-none focus:border-blue-500"
          placeholder="Use este espaço para anotar observações sobre o treino, dificuldades, sucessos, ajustes necessários, etc."
        />
      </div>
    </>
  );
};

export default NotesSection;