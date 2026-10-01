import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-card">

        <div className="loader-emoji">🛍️</div>

        <div className="spinner"></div>

        <h2>Loading...</h2>

        <p>Fetching amazing products for you 💕</p>

      </div>
    </div>
  );
};

export default Loader;