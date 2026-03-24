import axios from "axios";

const API = axios.create({
  baseURL: "/api", // use proxy
  withCredentials: true, // required for cookies
});

// APIs
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);