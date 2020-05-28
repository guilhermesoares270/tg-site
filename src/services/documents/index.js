import axios from 'axios';
import AxiosConfig from '../../shared/axiosConfig';

export const index = async () => {
  return (await axios.get('/ganache/index', AxiosConfig)).data;
};

export const currentEnterpriseContract = async () => {
  return (await axios.get('/ganache/enterprise', AxiosConfig)).data;
};

export const storeContract = async (sigAndIden) => {
  console.log(`sig: ${JSON.stringify(sigAndIden)}`);
  return (await axios.post('/ganache', sigAndIden, AxiosConfig)).data;
};

export const getDocument = async (fileHashObj) =>
  (await axios.post('/ganache/getDoc', fileHashObj, AxiosConfig)).data;

export default {
  index,
  currentEnterpriseContract,
  storeContract,
  getDocument,
};