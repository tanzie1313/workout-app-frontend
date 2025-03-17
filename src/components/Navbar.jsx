// src/components/Navbar.js
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
   const {user} = useContext (UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Lets Get Pumped</Link>
        {/* Add more links as needed */}
        <Link to="/about" className="navbar-link">About</Link>
        {user ? <SignedInNav /> : <NotSignedInNav />}
      </div>
    </nav>
  );

}
const SignedInNav = () => {
  return (
    <>  
      <Link to="/workouts" className="navbar-link">Workouts</Link>
      <Link to="/logout" className="navbar-link">Sign Out</Link>
        
    </>
  )
}
const NotSignedInNav = () => {
  return  (
  <> 
  <Link to="/signin" className="navbar-link">Sign In</Link>
  <Link to="/signup" className="navbar-link">Sign Up</Link>
  </>
  )
}
export default Navbar;