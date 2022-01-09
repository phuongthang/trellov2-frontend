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
     * [GET] detail user
     * @returns 
     */
    detail(params){
        const url = `/user/detail/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [POST] create user
     * @returns 
     */
    create(params){
        const url = `/user/create`;
        return axiosClient.post(url,params);
    },

    /**
     * [POST] update user
     * @returns 
     */
    update(params){
        const url = `/user/update`;
        return axiosClient.put(url,params);
    },

    
}

export default userApi;