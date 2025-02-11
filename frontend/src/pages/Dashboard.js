import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user ? user.email : 'Guest'}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
