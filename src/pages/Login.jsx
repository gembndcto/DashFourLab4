import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    // optional: navigate('/protected', { replace: true }); 
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // optional: navigate('/login', { replace: true });
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Protected Content</h1>
        <p>You are logged in — welcome!</p>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login to Classic Brews</h1>
      <p>Enter your credentials to access exclusive member perks!</p>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;