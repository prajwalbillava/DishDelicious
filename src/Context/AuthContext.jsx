import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Auth/FirebaseAuth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log("sign", email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
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
