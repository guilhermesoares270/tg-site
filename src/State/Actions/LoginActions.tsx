/**
 * action types
 */

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * action controllers
 */

export function performLogin() {
    return {
        type: LOGIN,
        value: true
    }
}

export function performLogout() {
    return {
        type: LOGOUT,
        value: false
    }
}

export const loginFilters = {
    LOGIN: LOGIN,
    LOGOUT: LOGOUT
}