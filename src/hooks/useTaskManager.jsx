import { useState } from "react";

function useTaskManager(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}

export default useTaskManager;