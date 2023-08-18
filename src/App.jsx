// src/App.jsx
import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import './App.css';
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  });
  const [newTaskName, setNewTaskName] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(false);
 

// Cargar el listado de tareas desde el localStorage usando useEffect

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  
  const handleAddTask = () => {
    if (newTaskName.trim() === "") return;

    if (editingTaskId) {
      // Editar tarea existente
      const updatedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, name: newTaskName } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(false);
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
  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      
      <Header />
      <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>
          {editingTaskId ? "Guardar Cambios" : "Agregar Tarea"}
        </button>
      <TaskList tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete} />
      <div>
        
      </div>
    </div>
  );
};

export default App;
