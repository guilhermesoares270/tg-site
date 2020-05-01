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
  if (res == null) return [false, null];
  console.log(`partial: ${JSON.stringify(res)}, ent: ${res.enterprise}`);
  const enterprise = await get(res.enterprise);
  console.log(`enterprise: ${JSON.stringify(enterprise)}`);
  const exist = enterprise != null
  return [exist, enterprise];
}

export default {
  create,
  index,
  del,
  findByPathParam,
};