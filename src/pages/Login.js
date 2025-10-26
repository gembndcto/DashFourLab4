import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/ProtectedRoute';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Login Page</h1>
      <p>Please log in to access protected content.</p>
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
        Login
      </button>
    </div>
  );
};

export default Login;