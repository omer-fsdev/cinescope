import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};
const AuthContextProvider = ({ children }) => {
  const values = { currentUser: { displayName: "WIP" }, createUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
