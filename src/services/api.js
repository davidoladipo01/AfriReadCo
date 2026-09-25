import axios from "axios"

const API_BASE_URL = import.meta.env.MODE === "production"
    ? (
        import.meta.env.VITE_PROD_BASE_URL ||
        import.meta.env.VITE_API_BASE_URL ||
        import.meta.env.VITE_DEV_BASE_URL ||
        "http://localhost:5005"
    )
    : (
        import.meta.env.VITE_DEV_BASE_URL ||
        import.meta.env.VITE_API_BASE_URL ||
        import.meta.env.VITE_PROD_BASE_URL ||
        "http://localhost:5005"
    );

const API = axios.create({
    baseURL: API_BASE_URL
});

export default API;
