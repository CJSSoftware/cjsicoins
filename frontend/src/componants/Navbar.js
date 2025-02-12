import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    CJSGaming iCoins
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-links">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-links">Admin Panel</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
