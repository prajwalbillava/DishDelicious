// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAky4_IepIUG6IUXvS519TKEIb6UCXsoIE",
  authDomain: "dish-delicious-bdb04.firebaseapp.com",
  projectId: "dish-delicious-bdb04",
  storageBucket: "dish-delicious-bdb04.appspot.com",
  messagingSenderId: "759428996278",
  appId: "1:759428996278:web:e2799a8b8f0d7f23675a17",
  measurementId: "G-NYBLCLKVJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
