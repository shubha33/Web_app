import axios from 'axios';

const conn = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 10000,
});


export const loginApi = (data) => conn.post('/auth/login', data);
export const serachApi = (data) => conn.post('/search', data);