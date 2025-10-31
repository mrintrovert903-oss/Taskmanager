import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  // Automatically use Render backend in production, local otherwise
  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://taskmanager-api.onrender.com" // Render URL
      : "http://localhost:5000";               // Local URL

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask API_BASE_URL={API_BASE_URL} />
      <TaskList API_BASE_URL={API_BASE_URL} />
    </div>
  );
};

export default App;
