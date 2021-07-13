import axios from 'axios';
axios.defaults.timeout = 10000;
//https://love-66-api-2-n3sgs.ondigitalocean.app
const URL = 'http://192.168.100.99:3333';
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
