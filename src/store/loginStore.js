import { performLogin } from '../services/sessions';

export const isLoggedState = (state = { isLogged: JSON.parse(localStorage.getItem('isLogged')) }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLogged: true };
    case 'LOGOUT':
      return { isLogged: false };
    default:
      return state;
  }
};

export default isLoggedState;