
const API_URL = 'http://localhost:3000';

export async function getExercises(workoutId) {
  const response = await fetch(`${API_URL}/workouts/${workoutId}`);
  return response.json();
}

export async function createExercise(workoutId, exerciseData) {
    exerciseData.workout = workoutId;
  const response = await fetch(`${API_URL}/exercises`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(exerciseData),
  });
  return response.json();

}
export async function updateExercise(exerciseId, exerciseData) {
    const response = await fetch(`${API_URL}/exercises/${exerciseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exerciseData),
    });
    return response.json();
  }
  
export async function deleteExercise(exerciseId) {
    const response = await fetch(`${API_URL}/exercises/${exerciseId}`, { method: 'DELETE' } );
    return  await response.json();
    }