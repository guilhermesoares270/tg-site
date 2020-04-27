import axios from 'axios';
import AxiosConfig from '../shared/axiosConfig';

// export const login = async (email, pass) => {
//   if (email === 'guilherme.soares270@gmail.com' && pass === '123') return true;
//   return false;
// };

export const login = async (email, password) => {
  const response = await axios.post(`/sessions`, {
    email,
    password,
  }, AxiosConfig);
  if (response.status === 200 && typeof response.data != null) return true;
  return false;
};

/**
 * 
 * @param {boolean} isLogged 
 */
export const persistLogin = async (isLogged) => {
  localStorage.setItem('isLogged', isLogged);
};

export const performLogin = async (email, pass) => {
  try {
    const isLogged = await login(email, pass);
    console.log(`isLogged: ${isLogged}`);
    await persistLogin(isLogged);
    return isLogged;
  } catch (error) {
    console.log(`perform login: ${error}`);
  }
};