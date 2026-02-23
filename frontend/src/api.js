import axios from 'axios';

const getBaseUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL;
    if (envUrl) {
        return envUrl.endsWith('/') ? envUrl : `${envUrl}/`;
    }
    return '/api/'; // Fallback for local proxy
};

const API = axios.create({
    baseURL: getBaseUrl(),
});

export const getTasks = () => API.get('tasks/');
export const createTask = (task) => API.post('tasks/', task);
export const updateTask = (id, task) => API.put(`tasks/${id}/`, task);
export const deleteTask = (id) => API.delete(`tasks/${id}/`);

export default API;