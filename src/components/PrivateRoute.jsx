import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login1" />;
}

export default PrivateRoute;
