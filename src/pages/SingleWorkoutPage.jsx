import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ExerciseForm from '../forms/ExerciseForm';
import { getWorkoutById,updateWorkout } from '../services/workoutService';
import { getExercises, updateExercise } from '../services/exerciseService';
import DeleteExerciseButton from '../components/DeleteExerciseButton';


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
    
    setExercises(data.exercises);
  };
return (
  <div className="container">
    <h1>Workout Page</h1>
    {/* Display workout details here */}

      {workout  ? (
        <>
        <EditableTitle title={workout.title} workoutId={id} onTitleChange={fetchWorkout} />
          <ExerciseForm workoutId={id} onExerciseCreated={fetchExercises} />
         { exercises.length > 0 ?
        <> <h3>Exercises</h3>
          <ul>
            {exercises.map(ex => (
              <EditableExercise key={ex._id} exercise={ex} onDelete={fetchExercises} />
            ))}
          </ul> 
          </>: <p>No exercises found</p>}
          
        </>
      ) : (
        <p>Loading workout...</p>
      )}
  </div>

);
};
const EditableTitle = ({ title, onTitleChange, workoutId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const handleEdit = async () => {
        if (isEditing) {
            await updateWorkout(workoutId, { title: newTitle });
        await onTitleChange();
        }
        setIsEditing(!isEditing);
    };
    return (
        <>
        {!isEditing ? (
            <h2>{title}</h2>
        ) : (
            <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            />
        )}
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </>
    );
}
 const EditableExercise = ({ exercise, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name , setName ] = useState(exercise.name);
    const [sets , setSets ] = useState(exercise.sets);
    const [reps , setReps ] = useState(exercise.reps);
    const [weight , setWeight ] = useState(exercise.weight);
    const handleEdit = async () => { 
        if (isEditing) {
            await updateExercise(exercise._id, { name, sets, reps, weight });
        } 
        setIsEditing(!isEditing);
    }
    return (
        <>
     
        <li>
            {!isEditing ?
            `${exercise.name} - ${exercise.sets} sets, ${exercise.reps} reps, ${exercise.weight} lbs` :
            <form>
                <label htmlFor="name"> Name:</label>    
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="sets">Sets:</label>    
                <input type="text" name="sets" value={sets} onChange={(e) => setSets(e.target.value)} />
                <label htmlFor="reps">Reps:</label>
                <input type="text" name="reps" value={reps} onChange={(e) => setReps(e.target.value)} />
                <label htmlFor="weight">Weight:</label>
                <input type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </form>
 }
            <DeleteExerciseButton exerciseId={exercise._id} onDelete={onDelete} />

        </li>
 
        <button onClick={() => handleEdit()}>{isEditing ? "Save" : "Edit"}</button>
          </>
        );
 };
export default SingleWorkoutPage;
