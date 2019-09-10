import config from '../config';

const TokenService = {
    saveAuthToken(token) {
        console.log(`saving the token: ${token}`);
        return window.localStorage.setItem(config.TOKEN_KEY, token);
},
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        return window.localStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken();
    },
    makeBasicAuthToken(userName, password) {
        const token = window.btoa(`${userName}:${password}`);
        console.log(`making the token: ${token}`);
        return token;
    },
};

export default TokenService;
