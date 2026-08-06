import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_DEV_BASE_URL
});



export default API;
