// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About';
import WorkoutsPage from './pages/WorkoutsPage';
import SingleWorkoutPage from './pages/SingleWorkoutPage';
import Logout from './pages/Logout';


function App() {
  return (
    <Router>
      {/* The Navbar will appear on every page */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/:id" element={<SingleWorkoutPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;


