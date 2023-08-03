// src/components/TaskList.jsx
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
