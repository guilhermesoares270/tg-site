// export const GLOBAL_API_URL = 'http://127.0.0.1:3333/api/v1';
export const GLOBAL_API_URL = 'https://tg-server270.herokuapp.com/api/v1';
export const GLOBAL_WINDOW_TITLE = 'TG | SERVER';
export const ROUTES_PREFIX = () => {
  const cnpj = localStorage.getItem('cnpj');
  return `/enterprise/${cnpj}`;
};