import { useState, useEffect } from 'react';

//Component
import TaskUpdateScreen from '../TaskUpdate/TaskUpdate';
import TaskFillterComponent from '../../Fillters/TaskFillter/TaskFillter';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';

//icon
import { MdBookmarkAdded } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

//packet
import { Link, useNavigate } from 'react-router-dom';
import { isEmpty } from 'underscore';
import ReactPaginate from 'react-paginate';

//Constants
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from '../../../utils/utils';
import Common from '../../../constants/common';
import LinkName from '../../../constants/linkName';
import TypeCode from './../../../constants/typeCode';
import { formatDate, formatDateTime, findFromId, filterProjectList, filterTaskList } from '../../../utils/helpers';

//api
import taskApi from './../../../api/taskApi';
import projectApi from './../../../api/projectApi';
import userApi from './../../../api/userApi';

//icon
import { ImBackward2, ImForward3 } from "react-icons/im";
import { filterProjectIdList } from './../../../utils/helpers';

export default function TaskListScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

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
    const [taskOriginList, setTaskOriginList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [parameterQuery, setParameterQuery] = useState({});
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }

    const [pageLimit] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [userData, setUserData] = useState({});
    const [projectIdList, setProjectIdList] = useState([]);



    /**
     * 
     * @param {*} get list project
     */

    const _getTaskList = (projectIdList) => {
        taskApi.all().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskOriginList(response.data.tasks);
                    setTaskList(filterTaskList(response.data.tasks, projectIdList).slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.tasks.length / pageLimit));
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
     * 
     * @param {*} get list project
     */

    const _getProjectList = () => {
        projectApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectList(filterProjectList(response.data.projects, userData._id));
                    const projectIdList = filterProjectIdList(response.data.projects, userData._id);
                    _getTaskList(projectIdList);
                    setProjectIdList(projectIdList);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * 
     * @param {*} get list user
     */

    const _getListUser = () => {
        userApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setUserList(response.data.users);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * 
     * @param {*} data 
     * click button search
     */
    const _onSearch = (data) => {
        taskApi.search(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskOriginList(response.data.tasks);
                    setTaskList(filterTaskList(response.data.tasks,projectIdList).slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.tasks.length / pageLimit));
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

    const _onNavigate = (url, states) => {
        navigate(url, { state: states });
    }

    /**
     * on page change
     * @param {*} 
     */
    const _onPageChange = (e) => {
        const selectedPage = e.selected;
        setPageCurrent(selectedPage + 1);
    }

    /**
     * click button delete search
     */
    const _onDeleteFillter = (name) => {
        if (parameterQuery[name] || parameterQuery[name] === 0) {
            delete parameterQuery[name];
        }
        _onSearch(parameterQuery);
    }

    useEffect(() => {
        setTaskList(taskOriginList.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
    }, [pageCurrent]);

    useEffect(()=>{
        if(userData){
            _getProjectList();
            _getListUser();
        }
    },[userData]);

    useEffect(() => {
        if (token) {
            setUserData(getUserDataFromLocalStorage);
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
                                    {isEmpty(parameterQuery) ?
                                        <span className="badge bg-success mr-5">Tất cả</span> :
                                        <>
                                            <> {parameterQuery.project && <span className="badge bg-success mr-5">Dự án: {findFromId(projectList, parameterQuery.project).project_name} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('project')} /></span>} </>
                                            <> {parameterQuery.assign && <span className="badge bg-success mr-5">Phân công cho: {findFromId(userList, parameterQuery.assign).fullname} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('assign')} /></span>} </>
                                            <> {(parameterQuery.category || parameterQuery.category === TypeCode.PROJECT.CATEGORY.OTHER) && <span className="badge bg-success mr-5">Phân loại: {TypeCode.PROJECT.CATEGORY_MAPPING[parameterQuery.category]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('category')} /></span>}</>
                                            <>{(parameterQuery.status || parameterQuery.status === TypeCode.PROJECT.STATUS.OTHER) && <span className="badge bg-success mr-5">Trạng thái: {TypeCode.PROJECT.STATUS_MAPPING[parameterQuery.status]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('status')} /></span>}</>
                                            <>{(parameterQuery.priority || parameterQuery.priority === TypeCode.TASK.PRIORITY.OTHER) && <span className="badge bg-success mr-5">Độ ưu tiên: {TypeCode.TASK.PRIORITY_MAPPING[parameterQuery.priority]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('priority')} /></span>}</>
                                            <>{(parameterQuery.title) && <span className="badge bg-success mr-5">Tiêu đề: {parameterQuery.title} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('title')} /></span>}</>
                                            <>{(parameterQuery.task_start_date) && <span className="badge bg-success mr-5">Ngày bắt đầu: {formatDate(parameterQuery.task_start_date)} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('task_start_date')} /></span>}</>
                                            <>{(parameterQuery.task_end_date) && <span className="badge bg-success mr-5">Ngày kết thúc: {formatDate(parameterQuery.task_end_date)} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('task_end_date')} /></span>}</>
                                        </>
                                    }
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
                                                    <tr key={idx}>
                                                        <td className="text-bold-500">#{idx + 1}</td>
                                                        <td className="cursor-pointer" onClick={() => { _onNavigate(LinkName.PROJECT_DETAIL, { projectId: item?.project?._id }) }}>{item?.project?.project_name}</td>
                                                        <td>
                                                            <button className={`btn btn-sm ${TypeCode.COLOR.COLOR_CATEGORY_MAPPING[+item.category]} rounded-pill`}>{TypeCode.PROJECT.CATEGORY_MAPPING[+item.category]}</button>
                                                        </td>
                                                        <td>
                                                            <button className={`btn btn-sm ${TypeCode.COLOR.COLOR_STATUS_MAPPING[+item.status]} rounded-pill`}>{TypeCode.PROJECT.STATUS_MAPPING[+item.status]}</button>
                                                        </td>
                                                        <td>
                                                            <button className={`btn btn-sm ${TypeCode.COLOR.COLOR_PRIORITY_MAPPING[+item.priority]} rounded-pill`}>{TypeCode.TASK.PRIORITY_MAPPING[+item.priority]}</button>
                                                        </td>
                                                        <td className="cursor-pointer" onClick={() => { _onNavigate(LinkName.TASK_DETAIL, { taskId: item._id }) }}>
                                                            {item.title}
                                                        </td>
                                                        <td className="text-bold-500 cursor-pointer" onClick={() => { _onNavigate(LinkName.USER_UPDATE, { userId: item?.assign?._id }) }}>
                                                            <div className="avatar me-3">
                                                                <img src={Common.ENV + item?.assign?.avatar} alt="" srcSet="" />
                                                            </div>
                                                            {item?.assign?.fullname}
                                                        </td>
                                                        <td>
                                                            {formatDateTime(item.update_at)}
                                                        </td>
                                                        <td>
                                                            <MdBookmarkAdded />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    {
                                        taskList.length <= 0 && (
                                            <div className="text-center mt-5">
                                                <h6>Không có công việc nào !</h6>
                                            </div>
                                        )

                                    }
                                </div>
                            </div>
                            {pageCount > 1 && <div className="d-flex justify-content-center">
                                <ReactPaginate
                                    previousLabel={<ImBackward2 />}
                                    nextLabel={<ImForward3 />}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={pageCount}
                                    onPageChange={_onPageChange}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
            {
                modalTaskFillter &&
                <TaskFillterComponent
                    modal={modalTaskFillter}
                    toggle={toggleModalTaskFillter}
                    projectList={projectList}
                    oldUserList={userList}
                    _onSearch={_onSearch}
                    parameterQuery={parameterQuery}
                    setParameterQuery={setParameterQuery}
                    taskList={taskList}
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