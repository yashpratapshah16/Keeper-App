import React, { useContext } from "react";
import { createContext } from "react";
import { useFirebase } from "./Firebase";
import { Navigate } from "react-router-dom";

const isUserContext = createContext(null);

export const useIsUser = () => useContext(isUserContext);

export const IsUserProvider = (props) => {
  const firebase = useFirebase();
  if (!firebase.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return props.children;
};
