import jwt_decode from "jwt-decode";

/**
 * get token from localstorage
 */
export function getTokenFromLocalStorage(){
    const token = localStorage.getItem('token');
    return token;
}

/**
 * get token from localstorage
 */
export function getUserDataFromLocalStorage(){
    const token = localStorage.getItem('token');
    const data = jwt_decode(token);
    return data.user;
}