import React from "react";

const Men = () => {
  return (
    <div className="category-container">
      <h2>👨 Men's Collection</h2>

      <div className="category-grid">
        <div className="category-card">
          <div className="category-icon">👕</div>
          <h3>Men's T-Shirts</h3>
          <p>Stylish and comfortable T-shirts for men.</p>
          <button>Shop Now</button>
        </div>

        <div className="category-card">
          <div className="category-icon">👖</div>
          <h3>Men's Jeans</h3>
          <p>Trendy jeans for a perfect casual look.</p>
          <button>Shop Now</button>
        </div>

        <div className="category-card">
          <div className="category-icon">👟</div>
          <h3>Men's Shoes</h3>
          <p>Comfortable and stylish shoes for every occasion.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Men;