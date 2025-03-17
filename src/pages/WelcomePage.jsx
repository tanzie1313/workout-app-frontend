 import React from 'react'; 
 import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotSignedIn from '../components/NotSignedIn';

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
 
        export default WelcomePage;
      