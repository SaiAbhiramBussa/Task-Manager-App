import { AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';
import { FileText, Plus } from 'lucide-react';

function TaskList({ tasks, onDelete, onAddClick, onEdit }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <FileText size={48} />
                <h2>No tasks yet</h2>
                <p>Create your first task to get started.</p>
                <button className="add-btn" onClick={onAddClick}>
                    <Plus size={18} />
                    Create Task
                </button>
            </div>
        );
    }

    return (
        <div className="task-grid">
            <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

export default TaskList;