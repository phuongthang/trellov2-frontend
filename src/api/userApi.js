import axiosClient from '../api/axiosClients';

const userApi = {

    /**
     * [GET] list user
     * @returns 
     */
    list(){
        const url = `/user/list`;
        return axiosClient.post(url);
    },

    /**
     * [POST] create user
     * @returns 
     */
    create(params){
        const url = `/user/create`;
        return axiosClient.post(url,params);
    },

    
}

export default userApi;