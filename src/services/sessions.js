export const login = (email, pass) => {
    if (email === 'guilherme.soares270@gmail.com' && pass === '123') return true;
    return false;
};

/**
 * 
 * @param {boolean} isLogged 
 */
export const persistLogin = (isLogged) => {
    localStorage.setItem('isLogged', isLogged);
};

export const performLogin = (email, pass) => {
    const isLogged = login(email, pass);
    persistLogin(isLogged);
    return isLogged;
};