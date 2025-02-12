import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Head>
                <title>CJS iCoins - Home</title>
                <meta name="description" content="Buy virtual gifts that trigger commands in Minecraft." />
            </Head>
            <div className="container">
                <h1>Welcome to CJS iCoins</h1>
                <p>Purchase coins and use them to trigger events in Minecraft!</p>

                <div className="buttons">
                    <Link href="https://localhost:3000/login">
                        <button>Login</button>
                    </Link>
                    <Link href="https://localhost:3000/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .container {
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #0070f3;
                }
                .buttons {
                    margin-top: 20px;
                }
                button {
                    padding: 10px 20px;
                    margin: 10px;
                    border: none;
                    background-color: #0070f3;
                    color: white;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                }
                button:hover {
                    background-color: #005bb5;
                }
            `}</style>
        </>
    );
};

export default Home;
