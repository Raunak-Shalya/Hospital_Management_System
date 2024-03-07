import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";

const Protected = () => {
  return false ? <Home /> : <Navigate to="/login" />;
};

export default Protected;
