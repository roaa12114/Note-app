import axios from "axios";



const api = axios.create({
  baseURL: "https://note-app-backend-production-ff22.up.railway.app/api",
});





export default api;

