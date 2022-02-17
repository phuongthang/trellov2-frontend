import axiosClient from '../api/axiosClients';

const authApi = {
    /**
     * [POST] get list user
     * @returns 
     */
    login(params) {
        const url = `/login`;
        return axiosClient.post(url, params);
    },

    /**
     * [POST] get list user
     * @returns 
     */
    change(params) {
        const url = `/change-password`;
        return axiosClient.put(url, params);
    },

    /**
     * [DELETE] delete user
     * @returns 
     */
    reset(params){
        const url = `/reset-password/${params}`;
        return axiosClient.delete(url);
    },


}

export default authApi;