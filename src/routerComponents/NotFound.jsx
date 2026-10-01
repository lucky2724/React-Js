import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-emoji">🥺</div>

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for seems to have wandered away 🐾
        </p>

        <Link to="/" className="home-btn">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;