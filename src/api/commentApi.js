import axiosClient from '../api/axiosClients';

const commentApi = {

    /**
     * [GET] list note
     * @returns 
     */
    list(params) {
        const url = `/comment/list/${params}`;
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
        const url = `/comment/create`;
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

export default commentApi;