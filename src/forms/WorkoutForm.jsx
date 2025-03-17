
import React, { useState } from 'react';
import { createWorkout } from '../services/workoutService';

const WorkoutForm = ({ onWorkoutCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createWorkout({ title });
    setTitle('');
    if (onWorkoutCreated) onWorkoutCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Workout</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Workout Title"
        required
      />
      <button type="submit">Create Workout</button>
    </form>
  );
};

export default WorkoutForm;
