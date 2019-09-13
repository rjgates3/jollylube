
const key = 'token';
const TokenService = {
    saveAuthToken(token) {
        console.log(`saving the token: ${token}`);
        return window.localStorage.setItem(key, token);
},
    getAuthToken() {
        return window.localStorage.getItem(key);
    },
    clearAuthToken() {
        return window.localStorage.removeItem(key);
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
