import API from "./api";

const registerUser = (userData)=>{
    return API.post("/register", userData);
}

const loginUser = (credentials)=>{
    return API.post("/login", credentials);
}

const logoutUser =()=>{
    return API.post("/auth/logout");
}

export { registerUser, loginUser, logoutUser }