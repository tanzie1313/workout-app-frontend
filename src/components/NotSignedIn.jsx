import React from 'react';
import { Link } from 'react-router-dom';
const NotSignedIn = () => {
    return (
      <div>
        <h2>Please sign in</h2>
        <p>If you are not a user, please sign in or register to access workouts.</p>
        <Link to="/signin"><button>Sign In</button></Link>
      </div>
    );
};
export default NotSignedIn;