import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import session from "./utils/session";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, metamaskLoggedIn } = useSelector(
    (state) => state.authentication
  );
  const token = session?.getSessionCred?.token;
  return isLoggedIn || metamaskLoggedIn || token ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
