import { createStore } from 'redux';
import { performLogin } from '../services/sessions';

const isLoggedState = (state = { isLogged: JSON.parse(localStorage.getItem('isLogged')) }, action) => {
    switch (action.type) {
        case 'LOGIN':
            const logged = performLogin(action.email, action.password);
            return { isLogged: logged };
        case 'LOGOUT':
            return { isLogged: false };
        default:
            return state;
    }
};

export default createStore(isLoggedState);  