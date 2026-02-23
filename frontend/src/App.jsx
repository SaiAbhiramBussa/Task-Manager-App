import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './api'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleAdd = async (taskData) => {
    try {
      await createTask(taskData);
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleToggle = async (task) => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

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

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length
  };

  return (
    <div className="App">
      <header>
        <div className="logo-section">
          <h1>TaskFlow</h1>
          <div className="status-badge">Live</div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>{stats.total}</span>
            <label>Total</label>
          </div>
          <div className="stat-card">
            <span>{stats.pending}</span>
            <label>Pending</label>
          </div>
          <div className="stat-card">
            <span>{stats.completed}</span>
            <label>Done</label>
          </div>
        </div>
      </header>

      <main>
        {isFormOpen && (
          <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <TaskForm onAdd={(data) => { handleAdd(data); setIsFormOpen(false); }} />
            </div>
          </div>
        )}

        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />

        <button className="fab" onClick={() => setIsFormOpen(true)}>
          +
        </button>
      </main>
    </div>
  )
}

export default App