import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product: {id}</h1>
      <p>Price: ₱150.00 </p>
    </div>
  );
}

export default Product;
