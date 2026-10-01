import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="page about-page">
      <section className="about-header">
        <h1>About Our Store 🛍️</h1>
        <p>Your trusted destination for quality products.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <span>🏪</span>
          <h2>Who We Are</h2>
          <p>
            We are an online shopping platform focused on providing quality
            products at affordable prices. Our goal is to make online shopping
            simple, secure, and enjoyable.
          </p>
        </div>

        <div className="about-card">
          <span>🎯</span>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best shopping experience with
            excellent products, secure payments, and fast delivery.
          </p>
        </div>

        <div className="about-card">
          <span>❤️</span>
          <h2>Why Choose Us?</h2>
          <p>
            Quality products, affordable prices, fast delivery, and customer
            satisfaction are our top priorities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;