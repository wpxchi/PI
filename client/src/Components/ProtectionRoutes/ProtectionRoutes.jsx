import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const Protection = ({ redirectPath }) => {
  const canActivate = localStorage.getItem('Token') !== null;

  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default Protection;