const API_URL = 'http://localhost:3000';

export async function getWorkouts() {
  const response = await fetch(`${API_URL}/workouts`);
  return response.json();
}

export async function getWorkoutById(id) {
  const response = await fetch(`${API_URL}/workouts/${id}`);
  return response.json();
}

export async function createWorkout(workoutData) {
    workoutData.user = JSON.parse(localStorage.getItem('user'))._id;
    try{
    const response = await fetch(`${API_URL}/workouts`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },

    body: JSON.stringify(workoutData),
  });
  return response.json();
} catch(error){
    console.error('Workout creation failed', error);
}
}
