import axios from 'axios';
import AxiosConfig from '../../shared/axiosConfig';

export const index = async () => {
  return (await axios.get('/ganache/index', AxiosConfig)).data;
};

export const currentEnterpriseContract = async () => {
  return (await axios.get('/ganache/enterprise', AxiosConfig)).data;
};

export default {
  index,
  currentEnterpriseContract
};