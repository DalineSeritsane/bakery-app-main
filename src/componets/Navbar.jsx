// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS for styling
import Logo from "../Images/logo.png"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={ Logo } alt="Bakery Logo" className="logo" />
          <span>SolBakery</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="nav-item">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact</Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/order" className="btn-order">Order Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
