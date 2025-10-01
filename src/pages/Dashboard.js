import React, { useEffect, useState, useCallback } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  const fetchUser = useCallback(async () => {
    try {
      const res = await API.get('/auth/me');
      setUser(res.data);
    } catch (err) {
      console.error(err);
      setUser({ name: 'Guest' }); // fallback
    }
  }, []);

  const fetchTasks = useCallback(async () => {
    try {
      const res = await API.get(`/tasks?search=${search}`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      setTasks([]);
    }
  }, [search]);

  useEffect(() => { fetchUser(); }, [fetchUser]);
  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-3xl mx-auto">
        {!user ? (
          <p>Loading user...</p>
        ) : (
          <>
            <h2 className="text-xl mb-2">Welcome, {user.name}</h2>
            <TaskForm fetchTasks={fetchTasks} />
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            {tasks.length === 0 ? (
              <p>No tasks found</p>
            ) : (
              <ul>
                {tasks.map((t) => (
                  <li key={t._id} className="border p-2 mb-2 flex justify-between items-center">
                    <div>
                      <h3 className={t.completed ? 'line-through' : ''}>{t.title}</h3>
                      <p>{t.description}</p>
                    </div>
                    <button
                      onClick={() => deleteTask(t._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}
