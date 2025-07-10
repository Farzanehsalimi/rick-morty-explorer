import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});
export default api;
