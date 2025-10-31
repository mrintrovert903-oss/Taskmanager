import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axios from "axios";

const App = () => {
  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://taskmanager-backend-4jhy.onrender.com"
      : "http://localhost:5000";

  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      {/* Pass both API URL and refresh function */}
      <AddTask API_BASE_URL={API_BASE_URL} onTaskAdded={fetchTasks} />
      <TaskList
        API_BASE_URL={API_BASE_URL}
        tasks={tasks}
        fetchTasks={fetchTasks}
      />
    </div>
  );
};

export default App;
