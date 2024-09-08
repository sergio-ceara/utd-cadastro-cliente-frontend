import axios from 'axios';

//baseURL:"http://localhost:8080/api"
//baseURL:"http://192.168.3.10:8080/api"
//baseURL
//const baseURL = "http://192.168.3.10:8080/api"; // URL base da API

//const baseFront = "http://192.168.3.10:5173"
//baseURL:"http://192.168.3.10:8080/api"
const baseFront = "https://utd-cadastro-cliente-frontend.vercel.app"

const api = axios.create({
    baseURL:"https://utdcadastro-clientebackend-production.up.railway.app/api"
});
export {baseFront};
export default api;
