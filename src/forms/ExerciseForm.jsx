import React, { useState } from 'react';
import { createExercise } from '../services/exerciseService';

const ExerciseForm = ({ workoutId, onExerciseCreated }) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createExercise(workoutId, { name, sets, reps, weight });
    setName('');
    if (onExerciseCreated) onExerciseCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Exercise</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Exercise Name"
        required
      />
      <input
        type="number"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        placeholder="Sets"
        required
      />
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="Reps"
        required
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight"
        required
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
