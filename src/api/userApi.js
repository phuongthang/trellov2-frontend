import axiosClient from '../api/axiosClients';

const userApi = {
    /**
     * [POST] create user
     * @returns 
     */
    create(params,config){
        const url = `/user/create`;
        return axiosClient.post(url,params,config);
    },

    
}

export default userApi;