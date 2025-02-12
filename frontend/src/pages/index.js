import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.css"; // Make sure to create this CSS file for styling

const IndexPage = () => {
  return (
    <div className="index-container">
      <div className="overlay">
        <img src="https://hostengland.co.uk/logo.png" alt="CJSGaming Logo" className="logo" />

        <div className="buttons-container">
          <a href="https://hostengland.co.uk/servers" className="btn">
            <img src="/server-icon.png" alt="Game Servers" />
            Game Servers
          </a>
          <a href="https://discord.gg/YOURDISCORD" className="btn">
            <img src="https://hostengland.co.uk/src/images/discord-icon.png" alt="Discord" />
            Our Discord
          </a>
          <Link to="https://hostengland.co.uk/dashboard" className="btn">
            <img src="https://hostengland.co.uk/src/images/icoins-icon.png" alt="iCoins Portal" />
            iCoins Portal
          </Link>
        </div>
      </div>

      <footer>
        <p>© 2025 CJSGaming Limited | <Link to="https://hostengland.co.uk/privacy-policy">Privacy Policy</Link></p>
      </footer>
    </div>
  );
};

export default IndexPage;
