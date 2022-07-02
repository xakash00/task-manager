import React from "react";
import { Route, Navigate, Outlet, Routes } from "react-router-dom";
import { auth } from "./config";
const PrivateRoute = () => {
  return localStorage.getItem("email") ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
