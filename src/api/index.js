import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";


//User

export function saveToken(token) {
 return axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
  return await axios.post("/login", {
    email,
    password,
  });
}

export async function registerUser(
  name,
  address,
  email,
  password,
  role

) {
  return axios.post(
    "/register",
    { name, address, email, password, role }
  );
}

export async function updateAccount(payload) {
  return axios.patch("user/updateUser", payload);
}

export async function allClients() {
  return axios.get("user/allClients?role=client");
}

export async function allWorkers() {
  return axios.get("user/allWorkers?role=worker");
}

export async function users() {
  return axios.get("user/allUsers");
}

export async function deleteUser(email) {
  return axios.get("user/deletUser", { email });
}

// Task

export async function createTask(formData) {
  return axios.post("task/createTask", formData);
}

export async function taskByMeClient(id) {
  return axios.get(`task/client/${id}`);
}

export async function taskByMeWorker(id) {
  return axios.get(`task/${id}`);
}

export async function allTasks() {
  return axios.get("task/allTasks");
}

export async function taskUpdate(formData) {
  return axios.get("task/taskUpdate", {
    formData,
  });
}

export async function deleteTask(title) {
  return axios.get("task/taskDelete", {
    title,
  });
}

//   Message
export async function sendMessge(title, content) {
  return axios.post("message/sendMessage", {
    title,
    content,
  });
}

export async function taskMessage(id) {
  return axios.get(`message/getByTask/${id}`);
}

export async function deletekMessage(id) {
  return axios.delete(`message/deleteById/${id}`);
}

// image

export async function taskImage(id) {
  return axios.get(`image/imageByTaskId/id=${id}`);
}

export async function allImage() {
  return axios.get("image/allImages");
}
