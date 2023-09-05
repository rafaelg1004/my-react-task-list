import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import "./styles/styles.css";
import useTaskManager from "./hooks/useTaskManager" // Importa el hook

const App = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(
    JSON.parse(localStorage.getItem("tasks")) || [] // Inicializa con tareas desde el localStorage
  );
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Cargar el listado de tareas desde el localStorage usando useEffect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskName.trim() === "") return;

    if (editingTaskId !== null) {
      // Editar tarea existente
      updateTask(editingTaskId, { name: newTaskName });
      setEditingTaskId(null); // Finalizar la edición
    } else {
      // Agregar nueva tarea
      createTask({
        id: tasks.length + 1,
        name: newTaskName,
        completed: false,
      });
    }

    setNewTaskName("");
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setNewTaskName(taskToEdit.name);
    setEditingTaskId(taskId);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateTask(taskId, { completed: !tasks.find((task) => task.id === taskId).completed });
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
        {editingTaskId !== null ? "Guardar Cambios" : "Agregar Tarea"}
      </button>
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={deleteTask} // Utiliza la función deleteTask del hook
        onToggleComplete={handleToggleComplete}
        editingTaskId={editingTaskId}
      />
      <div></div>
    </div>
  );
};

export default App;