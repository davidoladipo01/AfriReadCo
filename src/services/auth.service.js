import API from "./api";

const registerUser = (userData)=>{
    return API.post("/api/auth/register", userData);
}

const loginUser = (credentials)=>{
    return API.post("/api/auth/login", credentials);
}

const socialLogin = (clerkToken)=>{
    console.log("clerkToken:", clerkToken);
    return API.post("/api/auth/social", { clerkToken });
}

const logoutUser =()=>{
    return API.post("/api/auth/logout");
}

export { registerUser, loginUser, socialLogin, logoutUser }