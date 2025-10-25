import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
  };

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div>
      {children}
      <button type="button" onClick={handleLogout} style={{ marginTop: '12px' }}>
        Logout
      </button>
    </div>
  );
};

export default ProtectedRoute;