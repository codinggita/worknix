import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  // If no token exists, redirect to login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children; // Allow access if token exists
};

export default ProtectedRoute;
