import { Action } from 'redux';
import { performLogout, loginFilters } from '../Actions/LoginActions';

const initialState = {
    isLogged: false
}

function authenticate(state = initialState, action = performLogout()) {
    switch (action.type) {
        case loginFilters.LOGIN:
            return { isLogged: true };
        case loginFilters.LOGOUT:
            return { isLogged: false };
        default:
            return state;
    }
}

export default authenticate;