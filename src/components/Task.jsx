// src/components/Task.jsx
import React from "react";

const Task = ({ task, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.name}
      </span>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Task;
