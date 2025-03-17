const API_URL = 'http://localhost:3000';

export async function login(credentials) {
  const response = await fetch(`${API_URL}/users/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function register(userData) {
  const response = await fetch(`${API_URL}/users/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
}
