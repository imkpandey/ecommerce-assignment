import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" width={80} />
      </div>
    </div>
  );
};

export default Navbar;