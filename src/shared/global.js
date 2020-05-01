// import { useSelector } from 'react-redux';

export const GLOBAL_API_URL = 'http://127.0.0.1:3333/api/v1';
export const GLOBAL_WINDOW_TITLE = 'TG | SERVER';
export const ROUTES_PREFIX = () => {
  // const cnpj = useSelector(x => x.enterpriseStore.cnpj);
  const cnpj = localStorage.getItem('cnpj');
  return `/enterprise/${cnpj}`;
};