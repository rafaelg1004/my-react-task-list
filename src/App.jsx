// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Hacer la compra", completed: false },
    { id: 2, name: "Hacer ejercicio", completed: false },
    { id: 3, name: "Estudiar React", completed: false },
  ]);

  const [newTaskName, setNewTaskName] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTaskName.trim() === "") return;

    if (editingTaskId) {
      // Editar tarea existente
      const updatedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, name: newTaskName } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } else {
      // Agregar nueva tarea
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setNewTaskName("");
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setNewTaskName(taskToEdit.name);
    setEditingTaskId(taskId);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>
          {editingTaskId ? "Guardar Cambios" : "Agregar Tarea"}
        </button>
      </div>
    </div>
  );
};

export default App;
