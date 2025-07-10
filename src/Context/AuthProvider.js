"use client";
import auth from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 
  const createUser = (email, password)=>createUserWithEmailAndPassword(auth, email, password);
//   const signIn = (email, password)=>signInWithEmailAndPassword(auth, email, password);
//   const logOut = () => signOut(auth);
//   const googleSignIn = () => signInWithPopup(auth, new GoogleAuthProvider());
  

  const authInfo = {
    createUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
