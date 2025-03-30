import axios from 'axios';

const VITE_API_BACKEND = import.meta.env.VITE_API_BACKEND;

const axios_api = axios.create({
  baseURL: VITE_API_BACKEND,
});

export default axios_api;