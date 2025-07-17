import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Ejemplo de función para crear usuario
export const createUser = async (userData: {
    username: string;
    email: string;
    password: string;
}) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.response?.data || error.message);
        throw error;
    }
};

// Más funciones API según necesites...