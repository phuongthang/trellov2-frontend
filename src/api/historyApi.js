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
    all() {
        const url = `/comment/all`;
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

    /**
     * [DELETE] delete note
     * @returns 
     */
    delete(params) {
        const url = `/comment/delete/${params}`;
        return axiosClient.delete(url);
    },


}

export default historyApi;