import axios from 'axios';
axios.defaults.timeout = 10000;
const URL = 'https://love-66-api-e9r53.ondigitalocean.app';
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
