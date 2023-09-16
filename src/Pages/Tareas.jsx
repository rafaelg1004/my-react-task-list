import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import "../App.css";
import "../styles/styles.css";
import useTaskManager from "../hooks/useTaskManager" // Importa el hook
import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage, Heading } from "@chakra-ui/react";

const ListaTarea = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(
    JSON.parse(localStorage.getItem("tasks")) || [] // Inicializa con tareas desde el localStorage
  );
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Cargar el listado de tareas desde el localStorage usando useEffect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskName.trim() === ""|| newTaskName.length < 3)  {
      setNameError("Debe tener mas 3 caracteres");
      return;
    };
    setNameError(""); // Limpiar el mensaje de error si es válido
    if (editingTaskId !== null) {
      // Editar tarea existente
      updateTask(editingTaskId, { name: newTaskName ,description : newTaskDescription});
      setEditingTaskId(null); // Finalizar la edición
    } else {
      // Agregar nueva tarea
      createTask({
        id: tasks.length + 1,
        name: newTaskName,
        description: newTaskDescription,
        completed: false,
      });
    }

    setNewTaskName("");
    setNewTaskDescription("");
    
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setNewTaskDescription(taskToEdit.description); // Establecer la descripción existente
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
    <Box textAlign="center" mt="10">
      <Header />
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nombre"
        />
      </FormControl>

      <FormControl mt="4">
        <FormLabel>Descripción</FormLabel>
        <Input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Descripción"
        />
      </FormControl>

      <Button mt="4" colorScheme="teal" onClick={handleAddTask}>
        {editingTaskId !== null ? "Guardar Cambios" : "Agregar Tarea"}
      </Button>

      {nameError && (
        <FormErrorMessage color="red.500" mt="2">
          {nameError}
        </FormErrorMessage>
      )}

      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={deleteTask}
        onToggleComplete={handleToggleComplete}
        editingTaskId={editingTaskId}
      />
    </Box>
  );
};

export default ListaTarea;