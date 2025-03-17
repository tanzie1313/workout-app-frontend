import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Delete the exercise by ID
     fetch(`/exercises/${id}`, { method: 'DELETE' }).then(() => navigate('/workouts'));
  }, [id, navigate]);

  return (
    <div>
      <p>Deleting exercise...</p>
    </div>
  );
};

export default DeleteExercise;