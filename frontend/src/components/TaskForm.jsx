/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function TaskForm({ onSave, onCancel, initialTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description || '');
        }
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return alert('Title is required!');

        onSave({
            ...initialTask,
            title,
            description,
            priority: initialTask?.priority || 'medium',
            category: initialTask?.category || 'Personal'
        });

        if (!initialTask) {
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                className="input-field"
                type="text"
                placeholder="Ex: To - Do things in July 1st week"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="input-field"
                placeholder="Add some details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="add-btn">
                    {initialTask ? 'Update Task' : '+ Create Task'}
                </button>
            </div>
        </form>
    );
}

export default TaskForm;