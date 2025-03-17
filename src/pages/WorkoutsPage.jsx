import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkoutForm from '../forms/WorkoutForm';
import { getWorkouts } from '../services/workoutService';
import NotSignedIn from '../components/NotSignedIn';

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
   
    
  if (!user)
      return <NotSignedIn />;

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const data = await getWorkouts();
    setWorkouts(data);
  };

  return (
    <div className="container">
      <h2>Your Workouts</h2>
      <WorkoutForm onWorkoutCreated={fetchWorkouts} />
      <ul>
        {workouts.map(workout => (
          <li key={workout._id}>
            <Link to={`/workouts/${workout._id}`}>{workout.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutsPage;

