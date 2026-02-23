import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './api'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // 2. Add a task
  const handleAdd = async (taskData) => {
    try {
      await createTask(taskData);
      fetchTasks(); // Refresh list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // 3. Toggle Complete
  const handleToggle = async (task) => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // 4. Delete Task
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure?")) {
        await deleteTask(id);
        fetchTasks();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <TaskForm onAdd={handleAdd} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App