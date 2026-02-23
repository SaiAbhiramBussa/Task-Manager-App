/* eslint-disable react/prop-types */
import { useState } from 'react';

function TaskForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return alert('Title is required!');

        onAdd({ title, description, priority, category: category || 'Personal' });
        setTitle('');
        setDescription('');
        setPriority('medium');
        setCategory('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Add some details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="form-row">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <input
                    type="text"
                    placeholder="Category (e.g. Work)"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <button type="submit">Create Task</button>
        </form>
    );
}

export default TaskForm;