import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Pani Puri Store</Link>
      <Link to="/menu" className="nav-link">Menu</Link>
    </nav>
  );
};

export default Navbar;

