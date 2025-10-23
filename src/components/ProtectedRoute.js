import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const isAuthenticated = false; // TODO: Replace with real authentication check for the bonus task and make a /login component
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location  }} replace />;
    }

    return children;
}
