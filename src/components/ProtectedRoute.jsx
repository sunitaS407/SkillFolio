import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // LocalStorage diye check korlam je user login ache kina
  const isAuthenticated = localStorage.getItem("authToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
