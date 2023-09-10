import React, { useRef, useState } from "react";
import "../styles/SignUp.css";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const LinkComponent = props.linkComponent;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match..!");
    }
    try {
      setError("");
      setLoading(true);
      console.log("log", emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigateTo("/");
      const userData = {
        email: emailRef.current.value,
        name: nameRef.current.value, // You can customize this as needed
      };
      firestore.collection('users').doc(user.uid).set(userData);
    } catch (e) {
      console.log(e);
      setError("Failed to create Account");
    }
    setLoading(false);
  }
  return (
    <>
      <div className="form-box">
        {error && alert(error)}

        <form className="formSign" onSubmit={handleSubmit}>
          {/*currentUser.email*/}
          <span className="titleSign">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container1">
            <input
              type="text"
              className="inputSign"
              placeholder="Full Name"
              ref={nameRef}
            />
            <input
              type="email"
              className="inputSign"
              placeholder="Email"
              autoComplete="email"
              ref={emailRef}
            />
            <input
              type="password"
              className="inputSign"
              placeholder="Password"
              autoComplete="current-password"
              ref={passwordRef}
            />
            <input
              type="password"
              className="inputSign"
              placeholder="Confirm Password"
              autoComplete="current-password"
              ref={passwordConfirmRef}
            />
          </div>
          <button className="formButton" disabled={loading}>
            Sign up
          </button>
        </form>
        <div className="form-section">
          <p>
            Have an account?{" "}
            <LinkComponent to="/login1" className="formA">
              Log in
            </LinkComponent>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
