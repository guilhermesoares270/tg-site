import axios from 'axios';
import AxiosConfig from '../shared/axiosConfig';
// import {  } from './enterprise/index'

export const login = async (email, password) => {
  const response = await axios.post(`/sessions`, {
    email,
    password,
  }, AxiosConfig);
  return response.data;
};

/**
 * 
 * @param {boolean} isLogged 
 */
export const persistLogin = async isLogged => {
  localStorage.setItem('isLogged', isLogged);
};

export const persistCNPJ = async cnpj => {
  localStorage.setItem('cnpj', cnpj);
};

export const persistToken = async token => {
  localStorage.setItem('token', token);
};

export const performLogin = async (email, pass) => {
  try {
    const loginData = await login(email, pass);
    const isLogged = Object.keys(loginData).length !== 0;

    console.log(`isLogged: ${isLogged}`);
    await persistLogin(isLogged);
    await persistCNPJ(loginData.enterprise_cnpj);
    await persistToken(loginData.token);
    return loginData;
  } catch (error) {
    console.log(`perform login: ${error}`);
  }
};