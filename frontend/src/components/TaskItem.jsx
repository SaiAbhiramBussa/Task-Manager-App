import { motion } from 'framer-motion';
import { Trash2, Edit3, Clock } from 'lucide-react';

function TaskItem({ task, onDelete, onEdit }) {
    const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
    const formattedTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`task-card ${task.completed ? 'completed-task' : ''}`}
        >
            <div className="card-header">
                <h3 className="card-title">{task.title}</h3>
                <div className="card-actions">
                    <button className="card-btn edit" title="Edit" onClick={() => onEdit(task)}>
                        <Edit3 size={20} />
                    </button>
                    <button onClick={() => onDelete(task.id)} className="card-btn delete" title="Delete">
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>

            <div className="card-body">
                {task.description && <p>{task.description}</p>}
            </div>

            <div className="card-footer">
                <Clock size={16} />
                <span>Updated {formattedDate}, {formattedTime}</span>
            </div>
        </motion.div>
    );
}

export default TaskItem;