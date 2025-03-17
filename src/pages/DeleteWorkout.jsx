import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Delete the workout by ID
    fetch(`/api/workouts/${id}`, { method: 'DELETE' })
      .then(() => {
        navigate('/workouts');
      })
      .catch((error) => {
        console.error('Error deleting workout:', error);
      });
  }, [id, navigate]);

  return (
    <div>
      <p>Deleting workout...</p>
    </div>
  );
};

export default DeleteWorkout;