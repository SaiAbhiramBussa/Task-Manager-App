/* eslint-disable react/prop-types */
import { useState } from 'react';

function TaskForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return alert('Title is required!');
        
        onAdd({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Task Title..." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Description (optional)" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;