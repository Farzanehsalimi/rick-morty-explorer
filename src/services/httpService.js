import axios from "axios";

const app = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 15000,
});

app.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response || error.message);
    return Promise.reject(error);
  }
);

const http = {
  get: app.get,
};

export default http;
