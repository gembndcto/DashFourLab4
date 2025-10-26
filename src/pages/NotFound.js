import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <p>Page not found</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default NotFound;
