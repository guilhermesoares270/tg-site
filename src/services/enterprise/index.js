import axios from 'axios';
import AxiosConfig from '../../shared/axiosConfig';

export const create = async (enterpriseData) => {
  const response = await axios.post('/enterprises', enterpriseData, AxiosConfig);
  return response.data;
};

export default {
  create,
};