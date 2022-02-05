import axiosClient from '../api/axiosClients';

const taskApi = {

    /**
     * [GET] list project
     * @returns 
     */
    list(params) {
        const url = `/task/list/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [GET] list project
     * @returns 
     */
    all() {
        const url = `/task/all`;
        return axiosClient.get(url);
    },

    /**
     * [POST] list project
     * @returns 
     */
    search(params) {
        const url = `/task/search`;
        return axiosClient.post(url, params);
    },

    /**
     * [GET] detail user
     * @returns 
     */
    detail(params) {
        const url = `/task/detail/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [POST] create user
     * @returns 
     */
    create(params) {
        const url = `/task/create`;
        return axiosClient.post(url, params);
    },

    /**
     * [POST] update project
     * @returns 
     */
    update(params) {
        const url = `/task/update`;
        return axiosClient.put(url, params);
    },

    /**
     * [DELETE] delete user
     * @returns 
     */
    delete(params) {
        const url = `/project/delete/${params}`;
        return axiosClient.delete(url);
    },


}

export default taskApi;