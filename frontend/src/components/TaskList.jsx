import { AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div style={{ textAlign: 'center', color: '#94a3b8', marginTop: '40px' }}>
                <p>No tasks found. Time to relax! ☕</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            <AnimatePresence>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

export default TaskList;