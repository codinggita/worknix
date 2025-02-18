import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute component that checks if user is authenticated.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login page if no token is found
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
