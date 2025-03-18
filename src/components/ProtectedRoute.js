// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // Redirect the user to sign in if they are not authenticated.
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
