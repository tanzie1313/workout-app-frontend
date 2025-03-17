const API_URL = 'http://localhost:3000';
export const authService = {



 async  login(credentials) {
  const response = await fetch(`${API_URL}/auth/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  //todo: handle errors
    const data = await response.json();
 return data;
},

 async  register(userData) {
  const response = await fetch(`${API_URL}/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
}

 
};
