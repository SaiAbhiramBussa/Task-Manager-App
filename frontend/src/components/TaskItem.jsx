import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, CheckCircle, Circle, Tag } from 'lucide-react';

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`task-item priority-${task.priority} ${task.completed ? 'completed-task' : ''}`}
        >
            <div className="category-tag">
                <Tag size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                {task.category}
            </div>

            <div className="task-content">
                <div className="task-title-group">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            </div>

            <div className="task-actions">
                <button
                    onClick={() => onToggle(task)}
                    className="action-btn complete-btn"
                >
                    {task.completed ? <CheckCircle size={18} /> : <Circle size={18} />}
                    {task.completed ? 'Reopen' : 'Complete'}
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="action-btn delete-btn"
                >
                    <Trash2 size={18} />
                    Delete
                </button>
            </div>
        </motion.div>
    );
}

export default TaskItem;