import axios from 'axios';

const api = axios.create({
  baseURL: window.appConfig.API_URL
});

export default api;
