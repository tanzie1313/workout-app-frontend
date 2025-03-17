 import React from 'react'; 
 import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotSignedIn from '../components/NotSignedIn';
import { UserContext } from '../contexts/UserContext';

 const WelcomePage = () => {
  
   
        
    const {user} = useContext (UserContext);
   
    
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
      