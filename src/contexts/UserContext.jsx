import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optionally load user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);
    } catch (error) {
      console.error('Login failed', error);
    }
    return; 
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);
    } catch (error) {
      console.error('Registration failed', error);
    }
    return;
  };

  const isAuthenticated = !!user;
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
