import axios from 'axios';
axios.defaults.timeout = 10000;
const URL = 'https://api-love66.herokuapp.com';
const api = axios.create({
  baseURL: URL,
  validateStatus: (status) => {
    return true;
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
export { URL }
export default api;
