import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectionLogin = ({redirectPath}) => {
    const canActivate = localStorage.getItem('Token') !== null;

  if (canActivate) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
}

export default ProtectionLogin;