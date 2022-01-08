/**
 * get token from localstorage
 */
export function getTokenFromLocalStorage(){
    const token = localStorage.getItem('token');
    return token;
}