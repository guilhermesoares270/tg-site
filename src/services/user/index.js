import axios from 'axios';
import AxiosConfig from '../../shared/axiosConfig';

export const create = async (userData) => {
  console.log(`userData: ${JSON.stringify(userData)}`);
  const response = await axios.post('/users', userData, AxiosConfig);
  return response.data;
};

export default {
  create,
};