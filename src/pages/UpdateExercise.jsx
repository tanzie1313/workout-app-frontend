import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: '',
    weight: '',
    reps: '',
    sets: ''
  });
  useEffect(() => {
    // Fetch the exercise data by ID and set it to state
    fetch(`/exercises/${id}`)
      .then(response => response.json())
      .then(data => setExercise(data))
      .catch(error => console.error('Error fetching exercise:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise((prevExercise) => ({ ...prevExercise, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the exercise data
    fetch(`/exercises/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercise),
    })
      .then(() => navigate('/workouts'))
      .catch(error => console.error('Error updating exercise:', error));
  };

  return (

    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={exercise.name} onChange={handleChange} />
      </label>
      <label>
        Weight:
        <input type="text" name="weight" value={exercise.weight} onChange={handleChange} />
      </label>
      <label>
        Reps:
        <input type="text" name="reps" value={exercise.reps} onChange={handleChange} />
      </label>
      <label>
        Sets:
        <input type="text" name="sets" value={exercise.sets} onChange={handleChange} />
      </label>
      <button type="submit">Update Exercise</button>
    </form>
  );

};

export default UpdateExercise;