/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return <p>No tasks yet. Add one above!</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
}

export default TaskList;