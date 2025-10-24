import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ntf.css';

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const home = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code floating">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <div className="button-group">
          <button onClick={back} className="back-btn">
             Go Back
          </button>
          <button onClick={home} className="home-btn">
             Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;