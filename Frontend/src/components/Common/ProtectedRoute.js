
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const token = sessionStorage.getItem("token");

//   console.log("🔍 Checking token in ProtectedRoute:", token);

//   if (!token) {
//     console.log("❌ No token found! Redirecting...");
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext"; // Import the AuthContext

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);

  console.log("🔍 Checking user in ProtectedRoute:", user);

  if (!user) {
    console.log("❌ No user found! Redirecting...");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
