import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protect = ({authLogin}) => {
  return <>{authLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default Protect;
