import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>Welcome to CJSGaming iCoins</h1>
            <Link href="https://hostengland.co.uk/dashboard">
                <a>Go to Dashboard</a>
            </Link>
        </div>
    );
}

export default HomePage;
