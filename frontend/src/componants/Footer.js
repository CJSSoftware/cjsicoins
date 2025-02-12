import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© {new Date().getFullYear()} CJSGaming iCoins. All rights reserved.</p>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
