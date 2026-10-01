import React from "react";
import "../App.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1,999",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2,499",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "₹1,799",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 4,
      name: "Stylish Backpack",
      price: "₹1,299",
      image: "https://via.placeholder.com/250",
    },
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop Smarter, Live Better 🛍️</h1>
          <p>
            Discover amazing products at the best prices. Quality products
            delivered to your doorstep.
          </p>

          <button className="primary-btn">Shop Now</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Quick and safe delivery to your doorstep.</p>
        </div>

        <div className="feature-card">
          <span>💳</span>
          <h3>Secure Payment</h3>
          <p>Your payments are safe and secure.</p>
        </div>

        <div className="feature-card">
          <span>⭐</span>
          <h3>Best Quality</h3>
          <p>We provide quality products for you.</p>
        </div>
      </section>

      {/* Products */}
      <section className="products-section">
        <h2>Popular Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h3>{product.name}</h3>

              <p className="price">{product.price}</p>

              <button className="cart-btn">Add to Cart 🛒</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;