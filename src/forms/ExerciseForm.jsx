import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createExercise } from '../services/exerciseService';

const ExerciseForm = ({ workoutId, onExerciseCreated }) => {


  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: '',
    weight: '',
    reps: '',
    sets: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise((prevExercise) => ({ ...prevExercise, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createExercise(workoutId, exercise)
      .then(() => onExerciseCreated())
      .catch(error => console.error('Error creating exercise:', error));


  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={exercise.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Weight:
        <input
          type="text"
          name="weight"
          value={exercise.weight}
          onChange={handleChange}
        />
      </label>
      <label>
        Reps:
        <input
          type="text"
          name="reps"
          value={exercise.reps}
          onChange={handleChange}
        />
      </label>
      <label>
        Sets:
        <input
          type="text"
          name="sets"
          value={exercise.sets}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enter Exercise</button>
    </form>
  );
};

export default ExerciseForm;