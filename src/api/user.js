import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的实际API地址
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  login(credentials) {
    return apiClient.post('/login', credentials);
  },
  register(data) {
    return apiClient.post('/register', data);
  },
  getUserProfile() {
    return apiClient.get('/user/profile');
  }
};
