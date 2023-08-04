import React, { useState } from "react";

function ErrorBoundry(props) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleReset = () => {
    setHasError(false);
    setErrorMessage("");
  };

  const handleError = (error, errorInfo) => {
    setHasError(true);
    setErrorMessage(error.message || "Something went wrong.");
    console.error(error, errorInfo);
  };

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{errorMessage}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }

  return props.children;
}

export default ErrorBoundry;
