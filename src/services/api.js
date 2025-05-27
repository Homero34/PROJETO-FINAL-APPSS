import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts = () => api.get('/posts');
export const getPostById = (id) => api.get(`/posts/${id}`);