import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const loginUser = (credentials) => API.post("/auth/login", credentials);
export const registerUser = (userData) => API.post("/auth/register", userData);
export const uploadVideo = (formData, token) =>
  API.post("/video/upload", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getVideos = (token) =>
  API.get("/video", { headers: { Authorization: `Bearer ${token}` } });
