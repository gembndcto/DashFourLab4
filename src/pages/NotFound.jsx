import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find that page. Maybe try our menu instead?</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default NotFound;