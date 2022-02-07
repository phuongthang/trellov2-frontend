//Components
import ActivityHistoryComponent from "./ActivityHistory";
import AnalystComponent from "./Analyst";
import InformationComponent from "./Information";
import { useState, useEffect } from 'react';
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../utils/utils";
import LinkName from "../../constants/linkName";
import { useNavigate } from "react-router-dom";
import taskApi from "../../api/taskApi";
import Common from "../../constants/common";
import ModalErrorComponent from "../../components/Modal/ModalError/ModalError";

export default function HomeScreen() {

    const token = getTokenFromLocalStorage();
    let navigate = useNavigate();

    /**
     * define state
     */
    const [userData, setUserData] = useState({});
    const [taskList, setTaskList] = useState([]);

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

    /**
     * get infor user from token
     */
    useEffect(() => {
        if (token) {
            setUserData(getUserDataFromLocalStorage);
            _getTaskList({ assign: getUserDataFromLocalStorage()._id });
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
                        <AnalystComponent taskList = {taskList} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ActivityHistoryComponent userData={userData} />
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