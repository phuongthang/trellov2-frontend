import { useState, useEffect } from 'react';

//Component
import TaskUpdateScreen from '../TaskUpdate/TaskUpdate';
import TaskFillterComponent from '../../Fillters/TaskFillter/TaskFillter';

//icon
import { MdBookmarkAdded } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

//packet
import { Link, useNavigate } from 'react-router-dom';

//Constants
import { getTokenFromLocalStorage } from '../../../utils/utils';
import { useForm } from 'react-hook-form';
import taskApi from './../../../api/taskApi';
import Common from '../../../constants/common';
import LinkName from '../../../constants/linkName';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';
import TypeCode from './../../../constants/typeCode';
import { formatDate } from '../../../utils/helpers';

export default function TaskListScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, watch, getValues, formState: { errors } } = methods;
    /**
     * define state
     */
    const [modalTaskUpdate, setModalTaskUpdate] = useState(false);
    const toggleModalTaskUpdate = () => {
        setModalTaskUpdate(!modalTaskUpdate);
    }

    const [modalTaskFillter, setModalTaskFillter] = useState(false);
    const toggleModalTaskFillter = () => {
        setModalTaskFillter(!modalTaskFillter);
    }

    const [taskList, setTaskList] = useState([]);
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');
    const [keyWord, setKeyWord] = useState();
    const [projectId, setProjectId] = useState();

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }


    /**
     * 
     * @param {*} get list project
     */

    const _getTaskList = () => {
        taskApi.all().then(
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

    useEffect(() => {
        if (token) {
            _getTaskList();
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);



    /**
     * render template
     */
    return (
        <>
            <section className="section">
                <div className="row" id="table-striped">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title">DANH SÁCH CÔNG VIỆC</h4>
                                    <div className="">
                                        <Link
                                            to={LinkName.TASK_CREATE}
                                            className="btn btn-success btn-sm me-3 mb-3 mt-3 btn-custom"
                                        >Thêm mới
                                        </Link>
                                        <button
                                            className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom"
                                            onClick={toggleModalTaskFillter}
                                        >Tìm kiếm
                                        </button>
                                        <button
                                            className="btn btn-warning btn-sm me-3 mb-3 mt-3 btn-custom"
                                        >Xuất file
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="badges px-3 pb-3">
                                    <span className="badge bg-success mr-5">LandMark  <TiDelete /></span>
                                    <span className="badge bg-success mr-5">Đang mở  <TiDelete /></span>
                                    <span className="badge bg-success">Phương Công Thắng  <TiDelete /></span>
                                </div>
                                <div className="table-responsive px-3 pb-3 table-task-list">
                                    <table className="table table-striped mb-0">
                                        <thead className="text-center">
                                            <tr>
                                                <th>ID</th>
                                                <th>Dự án</th>
                                                <th>Phân loại</th>
                                                <th>Trạng thái</th>
                                                <th>Độ ưu tiên</th>
                                                <th>Tiêu đề</th>
                                                <th>Phân công cho</th>
                                                <th>Cập nhật</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {
                                                taskList.length > 0 && taskList.map((item, idx) => (
                                                    <tr>
                                                        <td className="text-bold-500">#{idx + 1}</td>
                                                        <td>{item.project.project_name}</td>
                                                        <td>{TypeCode.PROJECT.CATEGORY_MAPPING[item.category]}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger rounded-pill">{TypeCode.PROJECT.STATUS_MAPPING[+item.status]}</button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger rounded-pill">{TypeCode.TASK.PRIORITY_MAPPING[+item.priority]}</button>
                                                        </td>
                                                        <td>
                                                            {item.title}
                                                        </td>
                                                        <td className="text-bold-500">
                                                            <div className="avatar me-3">
                                                                <img src={Common.ENV + item.assign.avatar} alt="" srcSet="" />
                                                            </div>
                                                            {item.assign.fullname}
                                                        </td>
                                                        <td>
                                                            {formatDate(item.update_at)}
                                                        </td>
                                                        <td>
                                                            <MdBookmarkAdded onClick={toggleModalTaskUpdate} />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                modalTaskFillter &&
                <TaskFillterComponent
                    modal={modalTaskFillter}
                    toggle={toggleModalTaskFillter}
                />
            }
            {
                modalTaskUpdate &&
                <TaskUpdateScreen
                    modal={modalTaskUpdate}
                    toggle={toggleModalTaskUpdate}
                />
            }

            {
                modalError &&
                <ModalErrorComponent
                    modal={modalError}
                    toggle={toggleModalError}
                    message={message}
                />
            }

            {
                modalSuccess &&
                <ModalSuccessComponent
                    modal={modalSuccess}
                    toggle={toggleModalSuccess}
                    message={message}
                />
            }
        </>
    )
}