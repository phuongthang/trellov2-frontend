import axiosClient from '../api/axiosClients';

const authApi = {
    /**
     * [POST] get list user
     * @returns 
     */
    login(params){
        const url = `/login`;
        return axiosClient.post(url,params);
    },

    
}

export default authApi;