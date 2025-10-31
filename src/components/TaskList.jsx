import React from "react";
import axios from "axios";

const TaskList = ({ API_BASE_URL, tasks, fetchTasks }) => {
  const deleteTask = async (id) => {
    await axios.delete(`${API_BASE_URL}/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(`${API_BASE_URL}/api/tasks/${id}`, {
      completed: !completed,
    });
    fetchTasks();
  };

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
                borderLeft: task.completed
                  ? "5px solid green"
                  : "5px solid orange",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task._id, task.completed)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "gray" : "black",
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
