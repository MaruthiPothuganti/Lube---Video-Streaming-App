import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const token = useSelector((state) => state?.login?.token);
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate replace to="/Auth" state={{ from: location }} />
  );
};
