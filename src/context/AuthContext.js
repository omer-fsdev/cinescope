import React, { createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const values = { currentUser: { displayName: "WIP" } };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;