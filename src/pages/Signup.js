import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', { name, email, password });
      alert('Signup successful! Login now.');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-xl mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </button>
      </form>
      <p className="mt-2">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
}
