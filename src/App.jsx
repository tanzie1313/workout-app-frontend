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
import UpdateExercise from './pages/UpdateExercise.jsx';
import DeleteWorkout from './pages/DeleteWorkout.jsx';
import UpdateWorkout from './pages/UpdateWorkout.jsx';
import Logout from './pages/Logout';
import WelcomePage from './pages/WelcomePage';



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
        <Route path="/workouts/:id/update" element={<UpdateExercise />} />
        <Route path="/workouts/:id/update" element={<UpdateWorkout />} />
        <Route path="/workouts/:id/delete" element={<DeleteWorkout />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;


