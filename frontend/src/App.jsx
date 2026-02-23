import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './api'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { FileText, Plus, Search, X } from 'lucide-react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

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

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, taskData);
        showToast('Success!', 'Task updated successfully.');
      } else {
        await createTask(taskData);
        showToast('Success!', 'Task created successfully.');
      }
      fetchTasks();
      setIsFormOpen(false);
      setEditingTask(null);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
      showToast('Deleted', 'Task has been removed.');
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="App">
      <div className="panel">
        <header>
          <div className="header-title">
            <FileText size={28} />
            <h1>My Tasks ({tasks.length})</h1>
          </div>
          <button className="add-btn" onClick={() => setIsFormOpen(true)}>
            <Plus size={18} />
            Add Task
          </button>
        </header>

        <div className="search-container">
          <Search size={22} />
          <input
            type="text"
            className="search-input"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="panel">
        {isFormOpen ? (
          <div className="form-container">
            <div className="form-header">
              <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
              <button className="close-btn" onClick={handleCancel}>
                <X size={24} />
              </button>
            </div>
            <TaskForm
              onSave={handleSave}
              onCancel={handleCancel}
              initialTask={editingTask}
            />
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onAddClick={() => setIsFormOpen(true)}
          />
        )}
      </div>

      {toast && (
        <div className="toast">
          <h4>{toast.title}</h4>
          <p>{toast.message}</p>
        </div>
      )}
    </div>
  )
}

export default App