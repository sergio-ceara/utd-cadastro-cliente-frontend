import axios from 'axios';
//baseURL:"http://localhost:8080/api"
//baseURL:"http://192.168.3.10:8080/api"
//baseURL
//const baseURL = "http://192.168.3.10:8080/api"; // URL base da API
const baseFront = "http://192.168.3.10:5173"
const api = axios.create({
    baseURL:"http://192.168.3.10:8080/api"
});
export {baseFront};
export default api;
