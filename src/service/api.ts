import axios from 'axios';
const URL = 'http://192.168.100.99:3333';
const api = axios.create({
    baseURL: URL
})

export default api;
export { URL }