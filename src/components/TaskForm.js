import React, { useState } from 'react';
import API from '../utils/api';

export default function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded">
        Add Task
      </button>
    </form>
  );
}

