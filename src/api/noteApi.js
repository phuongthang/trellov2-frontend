import axiosClient from '../api/axiosClients';

const noteApi = {

    /**
     * [GET] list note
     * @returns 
     */
    list(params) {
        const url = `/note/list/${params}`;
        return axiosClient.get(url);
    },

    /**
     * [POST] create note
     * @returns 
     */
    create(params) {
        const url = `/note/create`;
        return axiosClient.post(url, params);
    },

    /**
     * [DELETE] delete note
     * @returns 
     */
    delete(params) {
        const url = `/note/delete/${params}`;
        return axiosClient.delete(url);
    },


}

export default noteApi;