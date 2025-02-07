import React, { useState } from "react";
import "../Styles/main.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState({ title: "", description: "", status: "To Do" });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addTask = () => {
    if (task.title && task.description) {
      setTasks([...tasks, task]);
      setTask({ title: "", description: "", status: "To Do" });
      closeModal();
    }
  };

  return (
    <div className="task-container">
      <h2>Task Management</h2>
      <button className="add-task-btn" onClick={openModal}>Add Task</button>
      
      <div className="task-list">
        {tasks.map((t, index) => (
          <div key={index} className="task-card">
            <h3>{t.title}</h3>
            <p>{t.description}</p>
            <span>{t.status}</span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Title" value={task.title} 
              onChange={(e) => setTask({ ...task, title: e.target.value })} />
            <input type="text" placeholder="Description" value={task.description} 
              onChange={(e) => setTask({ ...task, description: e.target.value })} />
            <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
            <button className="add-task-btn"  onClick={addTask}>Add</button>
            <button className="add-task-btn"  onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
