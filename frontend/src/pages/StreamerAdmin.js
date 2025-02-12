import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/StreamerAdmin.css"; // Import styles

const StreamerAdmin = () => {
    const [streamerData, setStreamerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [branding, setBranding] = useState({ logo: "", banner: "" });

    useEffect(() => {
        axios.get("/api/streamer/dashboard")
            .then(response => {
                setStreamerData(response.data);
                setBranding({
                    logo: response.data.logo || "",
                    banner: response.data.banner || ""
                });
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to load dashboard.");
                setLoading(false);
            });
    }, []);

    const handleBrandingChange = (e) => {
        const { name, value } = e.target;
        setBranding((prev) => ({ ...prev, [name]: value }));
    };

    const saveBranding = () => {
        axios.post("/api/streamer/update-branding", branding)
            .then(() => alert("Branding updated!"))
            .catch(() => alert("Failed to update branding."));
    };

    return (
        <div className="streamer-container">
            {/* Sidebar */}
            <div className="streamer-sidebar">
                <h2>Streamer Panel</h2>
                <ul>
                    <li><a href="/streamer/dashboard">Dashboard</a></li>
                    <li><a href="/streamer/payouts">Payouts</a></li>
                    <li><a href="/streamer/branding">Branding</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="streamer-content">
                <h1>Streamer Dashboard</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <div>
                        <p><strong>Total Earnings:</strong> ${streamerData.earnings}</p>
                        <p><strong>Pending Payouts:</strong> ${streamerData.pendingPayouts}</p>

                        <h2>Update Branding</h2>
                        <div className="branding-form">
                            <label>Logo URL:</label>
                            <input
                                type="text"
                                name="logo"
                                value={branding.logo}
                                onChange={handleBrandingChange}
                            />

                            <label>Banner URL:</label>
                            <input
                                type="text"
                                name="banner"
                                value={branding.banner}
                                onChange={handleBrandingChange}
                            />

                            <button onClick={saveBranding}>Save Branding</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StreamerAdmin;
