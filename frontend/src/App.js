import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Routes>
            <Route path="https://hostengland.co.uk/" element={<HomePage />} />
            <Route path="https://hostengland.co.uk/login" element={<Login />} />
            <Route path="https://hostengland.co.uk/register" element={<Register />} />
            <Route path="https://hostengland.co.uk/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="https://hostengland.co.uk/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        </Routes>
    );
}

export default App;
