import React from "react";

const Women = () => {
  return (
    <div className="category-container">
      <h2>👩 Women's Collection</h2>

      <div className="category-grid">
        <div className="category-card">
          <div className="category-icon">👗</div>
          <h3>Women's Dresses</h3>
          <p>Beautiful and trendy dresses for women.</p>
          <button>Shop Now</button>
        </div>

        <div className="category-card">
          <div className="category-icon">👜</div>
          <h3>Women's Bags</h3>
          <p>Elegant bags to complete your look.</p>
          <button>Shop Now</button>
        </div>

        <div className="category-card">
          <div className="category-icon">👠</div>
          <h3>Women's Shoes</h3>
          <p>Stylish footwear for every occasion.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Women;