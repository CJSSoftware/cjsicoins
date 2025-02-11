import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to CJSGaming iCoins</h1>
            <Link to="https://hostengland.co.uk/dashboard">Go to Dashboard</Link>
        </div>
    );
}

export default HomePage;
