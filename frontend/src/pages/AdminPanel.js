import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/AdminPanel.css"; // Import styles

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/api/admin/users")
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to load users.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><a href="/admin">Dashboard</a></li>
                    <li><a href="/admin/users">Manage Users</a></li>
                    <li><a href="/admin/gifts">Gift Prices</a></li>
                    <li><a href="/admin/transactions">Transactions</a></li>
                    <li><a href="/admin/refunds">Refunds</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                <h1>Manage Users</h1>
                {loading ? (
                    <p>Loading users...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.balance} Coins</td>
                                    <td>
                                        <button className="btn-edit">Edit</button>
                                        <button className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
