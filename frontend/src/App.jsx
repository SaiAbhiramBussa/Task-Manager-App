import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './api'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState('all'); // all, pending, completed

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

  const priorityOrder = { high: 0, medium: 1, low: 2 };

  const sortedAndFilteredTasks = tasks
    .filter(task => {
      if (filter === 'pending') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    })
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className="App">
      <header>
        <div className="logo-section">
          <h1>TaskFlow</h1>
          <div className="status-badge">Live</div>
        </div>

        <div className="stats-grid">
          <div
            className={`stat-card ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span>{stats.total}</span>
            <label>All</label>
          </div>
          <div
            className={`stat-card ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            <span>{stats.pending}</span>
            <label>Pending</label>
          </div>
          <div
            className={`stat-card ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
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

        <div className="action-area">
          <button className="hero-add-btn" onClick={() => setIsFormOpen(true)}>
            <span className="plus-icon">+</span>
            <span className="btn-text">Add New Task</span>
          </button>
        </div>

        <div className="view-header">
          <h2>{filter.charAt(0).toUpperCase() + filter.slice(1)} Feed</h2>
        </div>

        <TaskList tasks={sortedAndFilteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App