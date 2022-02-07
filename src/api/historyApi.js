import axiosClient from '../api/axiosClients';

const historyApi = {

    /**
     * [GET] list note
     * @returns 
     */
    list(params) {
        const url = `/history/list/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [GET] list note
     * @returns 
     */
    search(params) {
        const url = `/history/search/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [GET] list note
     * @returns 
     */
    all() {
        const url = `/history/all`;
        return axiosClient.get(url);
    },

    /**
     * [POST] create note
     * @returns 
     */
    create(params) {
        const url = `/history/create`;
        return axiosClient.post(url, params);
    },


}

export default historyApi;