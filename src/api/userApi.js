import axiosClient from '../api/axiosClients';

const userApi = {

    /**
     * [GET] list user
     * @returns 
     */
    list(){
        const url = `/user/list`;
        return axiosClient.get(url);
    },

    /**
     * [POST] list user
     * @returns 
     */
    search(params){
        const url = `/user/search`;
        return axiosClient.post(url, params);
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

    /**
     * [DELETE] delete user
     * @returns 
     */
    delete(params){
        const url = `/user/delete/${params}`;
        return axiosClient.delete(url);
    },

    
}

export default userApi;