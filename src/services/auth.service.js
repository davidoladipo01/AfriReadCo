import API from "./api";

const registerUser = (userData)=>{
    return API.post("/api/auth/register", userData);
}

const loginUser = (credentials)=>{
    return API.post("/api/auth/login", credentials);
}

const logoutUser =()=>{
    return API.post("/api/auth/logout");
}

export { registerUser, loginUser, logoutUser }