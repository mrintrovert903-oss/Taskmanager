import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ API_BASE_URL, onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await axios.post(`${API_BASE_URL}/api/tasks`, { title });
    setTitle("");

    // 🔹 Trigger re-fetch in parent
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter New Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
