import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExerciseForm from '../forms/ExerciseForm';
import { getWorkoutById } from '../services/workoutService';
import { getExercises } from '../services/exerciseService';

const SingleWorkoutPage = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchWorkout();
    fetchExercises();
  }, [id]);

  const fetchWorkout = async () => {
    const data = await getWorkoutById(id);
    setWorkout(data);
  };

  const fetchExercises = async () => {
    const data = await getExercises(id);
    setExercises(data);
  };

  return (
    <div className="container">
      {workout ? (
        <>
          <h2>{workout.title}</h2>
          <ExerciseForm workoutId={id} onExerciseCreated={fetchExercises} />
          <h3>Exercises</h3>
          <ul>
            {exercises.map(ex => (
              <li key={ex._id}>
                {ex.name} - {ex.sets} sets, {ex.reps} reps, {ex.weight} lbs
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading workout...</p>
      )}
    </div>
  );
};

export default SingleWorkoutPage;
