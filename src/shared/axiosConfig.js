import { GLOBAL_API_URL } from './global';

const token = localStorage.getItem('token');

export const AxiosConfig = {
  baseURL: GLOBAL_API_URL,
  // timeout: 10000,
  timeout: 120000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : null,
  },
  responseType: 'json',
  crossDomain: true
};

export default AxiosConfig;