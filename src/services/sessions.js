import axios from 'axios';
import AxiosConfig from '../shared/axiosConfig';
// import {  } from './enterprise/index'

export const login = async (email, password) => {
  const response = await axios.post(`/sessions`, {
    email,
    password,
  }, AxiosConfig);
  // if (response.status === 200 && typeof response.data != null) return true;
  // return false;
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

export const performLogin = async (email, pass) => {
  try {
    // const isLogged = await login(email, pass);
    const loginData = await login(email, pass);
    const isLogged = Object.keys(loginData).length !== 0;

    console.log(`isLogged: ${isLogged}`);
    await persistLogin(isLogged);
    await persistCNPJ(loginData.enterprise_cnpj);
    // return isLogged;
    return loginData;
  } catch (error) {
    console.log(`perform login: ${error}`);
  }
};