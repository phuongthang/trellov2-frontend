import { useState, useEffect } from 'react';
//Components
import ActivityHistoryComponent from "./ActivityHistory";
import AnalystComponent from "./Analyst";
import InformationComponent from "./Information";
import ModalErrorComponent from "../../components/Modal/ModalError/ModalError";

//constant
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../utils/utils";
import LinkName from "../../constants/linkName";
import Common from "../../constants/common";

//packet
import { useNavigate } from "react-router-dom";

//api
import taskApi from "../../api/taskApi";
import historyApi from './../../api/historyApi';

export default function HomeScreen() {

    const token = getTokenFromLocalStorage();
    let navigate = useNavigate();

    /**
     * define state
     */
    const [userData, setUserData] = useState({});
    const [taskList, setTaskList] = useState([]);
    const [historyList, setHistoryList] = useState([]);
    const [historyOriginList, setHistoryOriginList] = useState([]);

    const [pageLimit] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    /**
     * 
     * @param {*} data 
     * click button search
     */
    const _getTaskList = (data) => {
        taskApi.search(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskList(response.data.tasks);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _getHistoryList = (id) => {
        historyApi.search(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setHistoryOriginList(response.data.histories);
                    setHistoryList(response.data.histories.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.histories.length / pageLimit));
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách lịch sử hoạt động thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách lịch sử hoạt động thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * on page change
     * @param {*} 
     */
    const _onPageChange = (e) => {
        const selectedPage = e.selected;
        setPageCurrent(selectedPage + 1);
    }

    useEffect(() => {
        setHistoryList(historyOriginList.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
    }, [pageCurrent]);

    /**
     * get infor user from token
     */
    useEffect(() => {
        if (token) {
            setUserData(getUserDataFromLocalStorage);
            _getTaskList({ assign: getUserDataFromLocalStorage()._id });
            _getHistoryList(getUserDataFromLocalStorage()._id);
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        for (let item of Object.keys(localStorage)) {
            if (!['token'].includes(item)) {
                localStorage.removeItem(item);
            }
        }
    }, []);


    /**
     * render template
     */
    return (
        <div className="page-heading">
            <section className="section mt-3">
                <div className="row">
                    <div className="col-xl-5 col-md-5 col-sm-5">
                        <InformationComponent userData={userData} />
                    </div>
                    <div className="col-lg-7">
                        <AnalystComponent taskList={taskList} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ActivityHistoryComponent 
                        historyList={historyList} 
                        onPageChange = {_onPageChange}
                        pageCount = {pageCount} />
                    </div>
                </div>
            </section>
            {
                modalError &&
                <ModalErrorComponent
                    modal={modalError}
                    toggle={toggleModalError}
                    message={message}
                />
            }
        </div>
    )
}