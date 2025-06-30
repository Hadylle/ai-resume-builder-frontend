
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/api', 
  withCredentials: true, // if your backend uses cookies or session
});

export default axiosInstance;
