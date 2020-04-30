import axios from 'axios';
import AxiosConfig from '../../shared/axiosConfig';
import { Path } from 'path-parser'

export const create = async (enterpriseData) => {
  const response = await axios.post('/enterprises', enterpriseData, AxiosConfig);
  return response.data;
};

export const index = async () => {
  return (await axios.get('/enterprises', AxiosConfig)).data;
};

export const get = async (cnpj) => {
  return (await axios.get(`/enterprises/${cnpj}`, AxiosConfig)).data;
};

export const del = async (id) => {
  return (await axios.get('/enterprises', AxiosConfig)).data;
};

export const findByPathParam = async (path) => {
  const res = Path.createPath('/enterprise/:enterprise').partialTest(path);
  if (res == null) return false;
  return !!(await get(res.enterprise));
}

export default {
  create,
  index,
  del,
  findByPathParam,
};