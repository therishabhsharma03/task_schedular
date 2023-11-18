import axios from "axios";
import API_BASE_URL from "./config";

const apiService = axios.create({
  baseURL: API_BASE_URL,

});

export default apiService;