
const API_URL = 'http://localhost:3000';

export async function getExercises(workoutId) {
  const response = await fetch(`${API_URL}/workouts/${workoutId}`);
  return response.json();
}

export async function createExercise(workoutId, exerciseData) {
  const response = await fetch(`${API_URL}/workouts/${workoutId}/exercises`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(exerciseData),
  });
  return response.json();
}
