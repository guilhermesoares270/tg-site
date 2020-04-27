import { GLOBAL_API_URL } from './global';

export const AxiosConfig = {
  baseURL: GLOBAL_API_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  crossDomain: true
};

export default AxiosConfig;