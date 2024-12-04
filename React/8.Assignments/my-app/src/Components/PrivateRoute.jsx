import React from "react";
import { Navigate } from "react-router";
import { GlobalContext } from "../Context/AuthContextProvider"

const PrivateRoute = ({ children }) => {
  // I will allow user to access this children if only they are authenticated.
  //3.
  const { isAuth } = GlobalContext();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
