import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use(config => {
    if(localStorage.getItem('profile')){
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return config;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const upDatePost = (id, upDatedPost) => API.patch(`/posts/${id}`, upDatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);