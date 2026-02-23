import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api/';

const API = axios.create({
    baseURL: API_URL,
});

export const getTasks = () => API.get('tasks/');
export const createTask = (task) => API.post('tasks/', task);
export const updateTask = (id, task) => API.put(`tasks/${id}/`, task);
export const deleteTask = (id) => API.delete(`tasks/${id}/`);

export default API;