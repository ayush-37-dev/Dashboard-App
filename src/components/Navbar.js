import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <span className="font-bold">Dashboard</span>
      <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded">
        Logout
      </button>
    </nav>
  );
}
