// import React from "react";
// import { Navigate } from "react-router-dom";

// // ProtectedRoute component that checks if user is authenticated.
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     // Redirect to login page if no token is found
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  console.log("🔍 Checking token in ProtectedRoute:", token);

  if (!token) {
    console.log("❌ No token found! Redirecting...");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
