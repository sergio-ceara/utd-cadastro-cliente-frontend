// api.js
import axios from 'axios';

// Criação da instância do Axios com a base URL da API
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL // A URL base para as chamadas da API
});

// Exportação da URL base do frontend
export const baseFront = import.meta.env.VITE_NEXT_PUBLIC_BASE_FRONT;

export default api;
