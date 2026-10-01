import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully! 🎉");

    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us 📞</h1>
          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <div className="contact-details">
            <p>📧 support@shopnow.com</p>
            <p>📱 +91 9876543210</p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            value={data.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;