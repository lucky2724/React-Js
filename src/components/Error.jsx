import React from "react";
import "./Error.css";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">😿</div>

        <h2>Oops!</h2>

        <p>{message}</p>

        <button onClick={() => window.location.reload()}>
          Try Again 🔄
        </button>
      </div>
    </div>
  );
};

export default Error;