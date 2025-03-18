// src/pages/Logout.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'; // adjust the path as needed

const Logout = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout(); // Clear user session

        // Redirect to sign in page after 3 seconds
        const timer = setTimeout(() => {
            navigate('/signin');
        }, 3000);

        return () => clearTimeout(timer);
    }, [logout, navigate]);

    return (
        <div>
            <h2>Goodbye!</h2>
            <p>You have been signed out. We hope to see you again soon!</p>
        </div>
    );
};

export default Logout;
