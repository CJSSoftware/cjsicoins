import React, { createContext, useState, useContext } from 'react';
import axios from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await axios.post('/auth/login', { email, password });
            setUser(res.data.user);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const register = async (email, password) => {
        try {
            await axios.post('/auth/register', { email, password });
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
