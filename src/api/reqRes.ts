import axios from 'axios';


export const reqResApi = axios.create({
  baseURL: 'http://localhost:8000/api',
});