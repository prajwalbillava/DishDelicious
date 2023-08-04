import React, { useState } from "react";
import "../styles/Login.css";
import { Link, Outlet } from "react-router-dom";
import { auth, googleProvider } from "../Auth/FirebaseAuth";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
//import { async } from "@firebase/util";
import Forgotpassword from "./Forgotpassword";
import ErrorBoundry from "./ErrorBoundry";

function Login(props) {
  const LinkComponent = props.linkComponent;
  const [isSignUp, setIsSignUp] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
    } catch (err) {
      console.error(err);
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const containerClassName = `container ${
    isSignUp ? "right-panel-active" : ""
  }`;
  const forgot = () => {
    setForgotPassword(true);
  };
  return (
    <>
      <div className="loginmain">
        <div id="container" className={containerClassName}>
          <div className="form-container sign-up-container">
            <form action="#" className="formlogin">
              <h1 className="hoginh1">Create Account</h1>
              <div className="social-container">
                <a href="#" className="logina social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="logina social"
                  onClick={signInWithGoogle}
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="logina social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="loginspan">
                or use your email for registration
              </span>
              <input className="loginInput" type="text" placeholder="Name" />
              <input
                className="loginInput"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="loginbutton " onClick={signIn}>
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" className="formlogin">
              <h1 className="hoginh1">Sign in</h1>
              <div className="social-container">
                <a href="#" className="logina social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="logina social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="logina social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="loginspan">or use your account</span>
              <input className="loginInput" type="email" placeholder="Email" />
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
              />
              <LinkComponent to="/forgotpass">Forgot Password</LinkComponent>

              <button className="loginbutton ">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="hoginh1">Welcome Back!</h1>
                <p className="loginp">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost loginbutton "
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="hoginh1">Hello, Friend!</h1>
                <p className="loginp">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost loginbutton"
                  id="signUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*forgotPassword && (
        <ErrorBoundry>
          <Forgotpassword />
        </ErrorBoundry>
      )*/}
    </>
  );
}

export default Login;
