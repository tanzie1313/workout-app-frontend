// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Lets Get Pumped</Link>
        {/* Add more links as needed */}
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/signin" className="navbar-link">Sign In</Link>
        <Link to="/signup" className="navbar-link">Sign Up</Link>
        <Link to="/workouts" className="navbar-link">Workouts</Link>
        <Link to="/logout">Sign Out</Link> {/* Sign-out link */}
      </div>
    </nav>
  );
}

export default Navbar;