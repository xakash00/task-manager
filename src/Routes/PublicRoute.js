import React from "react";
import { Navigate,Outlet, Route, Routes } from "react-router-dom";
import { auth } from "./config";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    
  return localStorage.getItem(null) ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
