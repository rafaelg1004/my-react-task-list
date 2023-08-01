// src/components/Task.jsx
import React from "react";

const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={handleToggleComplete}
      >
        {task.name}
      </span>
      <button className="edit-button" onClick={handleEdit}>
        Editar
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Borrar
      </button>
    </div>
  );
};

export default Task;
