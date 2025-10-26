import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = false; // Replace with actual auth logic
  return isLoggedIn ? children : <Navigate to="/login" />;
}
