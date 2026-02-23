/* eslint-disable react/prop-types */
function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <button onClick={() => onToggle(task)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => onDelete(task.id)} className="delete-btn">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;