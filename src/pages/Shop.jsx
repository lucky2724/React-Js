import React from "react";
import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop-container">

      <h1>Shop 🛍️</h1>

      <div className="shop-buttons">
        <Link to="men">
          <button>👨 Men</button>
        </Link>

        <Link to="women">
          <button>👩 Women</button>
        </Link>

        <Link to="kids">
          <button>🧒 Kids</button>
        </Link>
      </div>

      <Outlet />

    </div>
  );
};

export default Shop;