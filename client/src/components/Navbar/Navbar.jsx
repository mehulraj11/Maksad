import React, { useState } from "react";
import './Navbar.css';
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("mobile-app");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="navbar">
      <img className='logo-design' src={assets.logo} alt="Logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("category")} className={menu === "category" ? "active" : ""}>Category</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <img src={assets.search_icon} alt="Search" />
          </button>
        </form>
        <div className="navbar-basket">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button className="signin-button">Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
