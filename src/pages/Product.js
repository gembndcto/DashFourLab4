import { useParams, useNavigate } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h2>Product ID: {id}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
