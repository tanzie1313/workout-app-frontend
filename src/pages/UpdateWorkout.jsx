
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState({ name: '', description: '' });

  useEffect(() => {
    // Fetch the workout data by ID and set it to state
    // Example: fetch(`/api/workouts/${id}`).then(response => response.json()).then(data => setWorkout(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({ ...prevWorkout, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the workout data
    // Example: fetch(`/api/workouts/${id}`, { method: 'PUT', body: JSON.stringify(workout) }).then(() => navigate('/workouts'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={workout.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={workout.description} onChange={handleChange} />
      </label>
      <button type="submit">Update Workout</button>
    </form>
  );
};

export default UpdateWorkout;