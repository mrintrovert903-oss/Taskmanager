import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // 🔹 Fetch all tasks from backend
  // const fetchTasks = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/tasks");
  //     setTasks(res.data);
  //   } catch (err) {
  //     console.error("Error fetching tasks:", err);
  //   } 
  // };

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data)
    } catch (err) {
      console.error("Error fetching tasks", err)
    }
  }

  useEffect (()=>{
    fetchTasks()
  },[])

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`)
    fetchTasks()
  }

  // 🔹 Toggle completion status
  // const toggleComplete = async (id, completed) => {
  //   await axios.put(`http://localhost:5000/api/tasks/${id}`, {
  //     completed: !completed,
  //   });
  //   fetchTasks(); // refresh list after updating
  // };

  const toggleComplete = async(id,completed) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`,{
      completed: !completed,
    })
    fetchTasks();
  }

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>📋 Task List</h2>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No tasks yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
                padding: "10px 15px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                borderLeft: task.completed ? "5px solid green" : "5px solid orange",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task._id, task.completed)}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "gray" : "black",
                    fontSize: "16px",
                  }}
                >
                  {task.title}
                </span>
              </div>

              <button
                onClick={() => deleteTask(task._id)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "red",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
