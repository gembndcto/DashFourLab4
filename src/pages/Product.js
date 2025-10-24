import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './product.css';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="product-container">
        <h2>Product PAGE</h2>
      <div className="prod-cont">
        <h2>Product ID: {id}</h2>
      </div>
      <button onClick={handleGoBack} className="back">
        Go Back
      </button>
    </div>
  );
};

export default Product;