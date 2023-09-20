import React, { useState } from "react";
import "../styles/Forgotpassword.css";
import { auth, db } from "../Auth/FirebaseAuth";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";

function Forgotpassword() {
  const [Error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { resetpassword } = useAuth();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage("");
      // Send password reset email to user's email address
      await resetpassword(email);

     

      // Display success message
      setSuccessMessage(
        "Password reset email has been sent to your email address"
      );
    } catch (error) {
      // Display error message
      setError(true);
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="container-fluid text-center">
        <div className="content-box col-xl-5 col-lg-7 col-md-9 col-sm-11 col-xs-12 mx-auto">
          <div className="reset-password-page">
            <header>
              <h3 className="logo">Dish Delicious</h3>
            </header>

            <main className="signup">
              <h3>Forgot Your Password?</h3>
              <p>
                Don't worry. Resetting your password is easy, just tell us the
                email address you registered with Dish Delicious to request a
                password reset.
              </p>
              <form
                method="POST"
                action=""
                onSubmit={handleResetPassword}
                className="needs-validation"
                noValidate
              >
                <input
                  className="form-control form-control-lg"
                  name="email"
                  type="email"
                  onChange={handleEmailChange}
                  value={email}
                  placeholder="Enter your Verification Email.."
                  required
                />

                {Error && (
                  <div className="error-box alert">
                    <img src="img/warning_sign.png" alt="warning sign" />
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-danger">
                        {errorMessage}
                      </li>
                    </ul>
                  </div>
                )}

                <button type="submit" className="btn btn-lg  btn-outline-dark">
                  Reset
                </button>
              </form>

              {successMessage && <p>{successMessage}</p>}
            </main>
          </div>
        </div>
      </div>

    </>
  );
}

export default Forgotpassword;
