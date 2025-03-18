import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkoutForm from '../forms/WorkoutForm';
import { getWorkouts } from '../services/workoutService';
import NotSignedIn from '../components/NotSignedIn';
import  { deleteWorkout } from '../services/workoutService';

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [refetch, setRefetch] = useState(false);
   
    
  if (!user)
      return <NotSignedIn />;

  useEffect(() => {
    fetchWorkouts();
  },[]);
  
  useEffect(() => { 
    if (!refetch) return;
    fetchWorkouts();
    setRefetch(false);
  },[refetch]);
  
  const fetchWorkouts = async () => {
    const data = await getWorkouts();
    setWorkouts(data);
  };
  const removeWorkout = async (id) => {
   await deleteWorkout(id);
    setRefetch(true);
  };

  return (
    <div className="container">
      <h2>Your Workouts</h2>
      <WorkoutForm onWorkoutCreated={fetchWorkouts} />
      
      
     
      <div>
        <h1>Workouts Page</h1>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id}>
              <Link to={`/workouts/${workout._id}`}>{workout.title}</Link>
              <Link to={`/workouts/${workout._id}`}>
                <button>Update</button>
              </Link>
              {/* <Link to={`/workouts/${workout._id}/delete`}> */}
                <button onClick= {()=>removeWorkout(workout._id)}>Delete</button>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutsPage;



