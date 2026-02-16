import axios from "axios";

const API = axios.create({
  baseURL: "https://willowy-selma-myself22-adad783f.koyeb.app/api/",
});

export const getTasks = () => API.get("tasks/");
export const createTask = (data) => API.post("tasks/", data);
export const updateTask = (id, data) => API.patch(`tasks/${id}/`, data);
export const deleteTask = (id) => API.delete(`tasks/${id}/`);

export default API;
