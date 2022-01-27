import axiosClient from '../api/axiosClients';

const projectApi = {

    /**
     * [GET] list project
     * @returns 
     */
    list(){
        const url = `/project/list`;
        return axiosClient.get(url);
    },

    /**
     * [POST] list project
     * @returns 
     */
    search(params){
        const url = `/project/search`;
        return axiosClient.post(url, params);
    },

    /**
     * [GET] detail user
     * @returns 
     */
    detail(params){
        const url = `/project/detail/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [POST] create user
     * @returns 
     */
    create(params){
        const url = `/project/create`;
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
        const url = `/project/delete/${params}`;
        return axiosClient.delete(url);
    },

    
}

export default projectApi;