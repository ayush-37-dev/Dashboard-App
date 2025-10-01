import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
          type="email"
          required
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full"
          type="password"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-2">
        Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
      </p>
    </div>
  );
}
