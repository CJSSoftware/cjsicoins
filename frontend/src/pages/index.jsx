import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.css"; // Make sure to create this CSS file for styling

const IndexPage = () => {
  return (
    <div className="index-container">
      <div className="overlay">
        <img src="/logo.png" alt="CJSGaming Logo" className="logo" />

        <div className="buttons-container">
          <a href="https://yourgameserver.com" className="btn">
            <img src="/server-icon.png" alt="Game Servers" />
            Game Servers
          </a>
          <a href="https://discord.gg/YOURDISCORD" className="btn">
            <img src="/discord-icon.png" alt="Discord" />
            Our Discord
          </a>
          <Link to="/dashboard" className="btn">
            <img src="/icoins-icon.png" alt="iCoins Portal" />
            iCoins Portal
          </Link>
        </div>
      </div>

      <footer>
        <p>© 2025 CJSGaming Limited | <Link to="/privacy-policy">Privacy Policy</Link></p>
      </footer>
    </div>
  );
};

export default IndexPage;
