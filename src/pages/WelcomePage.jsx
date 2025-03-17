 import React from 'react'; 
 import { useEffect } from 'react';
import { Link } from 'react-router-dom';

 const WelcomePage = () => {
  
   
        
   const user = JSON.parse(localStorage.getItem('user'));
   
    
    if (!user)
        return <NotSignedIn />;

      
    return (
      <div>
         <h2>Welcome {user.username}</h2>
         <p>Track your workouts and exercises with a retro vibe!</p>
          <Link to="/workouts"><button>workouts</button></Link>
      </div>
    );
     };
 
     const NotSignedIn = () => {
        return (
          <div>
            <h2>Please sign in</h2>
            <p>If you are not a user, please sign in or register to access workouts.</p>
            {/* Your sign-in form goes here */}
          </div>
        );
    }
        export default WelcomePage;
      