import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../Auth/FirebaseAuth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  console.log(useContext(AuthContext));
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log("sign", email, password);
    const loginUser = createUserWithEmailAndPassword(auth, email, password);
    console.log("signupUser", loginUser.user);
  }
  function login(email, password) {
    const signupUser = signInWithEmailAndPassword(auth, email, password);

    console.log("loginuser", signupUser.user);
  }
  function logout() {
    return signOut(auth);
  }
  function resetpassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setLoading(false);
    });

    return unsuscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetpassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
