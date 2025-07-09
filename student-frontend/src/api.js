import axios from 'axios';

console.log('BASE URL:', process.env.REACT_APP_API_BASE_URL);  // ✅ Debug this

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export default api;
