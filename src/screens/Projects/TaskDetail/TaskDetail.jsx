import { useState, useEffect } from 'react';

//Component
import TaskUpdateScreen from './../TaskUpdate/TaskUpdate';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';
import ModalConfirmDeleteCommentComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';

//packet
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//constant
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from '../../../utils/utils';
import LinkName from '../../../constants/linkName';
import Common from '../../../constants/common';
import { formatDate, replaceString, formatDateTime } from '../../../utils/helpers';
import TypeCode from './../../../constants/typeCode';
import Message from './../../../constants/message';
import Validation from '../../../constants/validation';

//api
import taskApi from './../../../api/taskApi';
import commentApi from '../../../api/commentApi';
import historyApi from '../../../api/historyApi';


export default function TaskDetailScreen(props) {

    /**
     * get property
     */
    const { state } = useLocation();
    const taskId = state.taskId;

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = methods;
    /**
     * define state
     */
    const [userData, setUserData] = useState({});
    const [taskInfo, setTaskInfo] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [historyList, setHistoryList] = useState([]);

    const [modalTaskUpdate, setModalTaskUpdate] = useState(false);
    const toggleModalTaskUpdate = () => {
        setModalTaskUpdate(!modalTaskUpdate);
    }

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }
    const [message, setMessage] = useState('');
    const [keyWord, setKeyWord] = useState();
    const [commentId, setCommentId] = useState();

    /**
     * 
     * @param {*} id 
     * click button delete
     */
    const _onDelete = (id) => {
        commentApi.delete(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Xóa bình luận thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Xóa bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Xóa bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * open/close modal confirm delete comment
     */
    const [modalConfirmDeleteComment, setModalConfirmDeleteComment] = useState(false);
    const toggleModalConfirmDeleteComment = (id, keyWord) => {
        setCommentId(id);
        setKeyWord(keyWord);
        setModalConfirmDeleteComment(!modalConfirmDeleteComment);
    }

    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    const _onDetail = (id) => {
        taskApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskInfo(response.data.data.task);
                }
                else {
                    setMessage(response.data.message || 'Lấy thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _getCommentList = (id) => {
        commentApi.list(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setCommentList(response.data.comments);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _getHistoryList = (id) => {
        historyApi.list(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setHistoryList(response.data.histories);
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

    const _onSubmit = () => {
        const data = {
            comment: getValues('comment'),
            task: taskId,
            user_create: userData._id,
            user_edit: userData._id

        }

        commentApi.create(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Đăng kí bình luận thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Đăng kí bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Đăng kí công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    useEffect(() => {
        if (token) {
            _onDetail(taskId);
            _getCommentList(taskId);
            _getHistoryList(taskId);
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
                <div className="card">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-4" style={{ borderRight: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">THÔNG TIN DỰ ÁN</h5>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Dự án: {taskInfo?.project?.project_name}</h6>
                                    <h6 className="list-group-item">Ngày bắt đầu: {formatDate(taskInfo?.project?.project_start_date)}</h6>
                                    <h6 className="list-group-item">Ngày kết thúc: {formatDate(taskInfo?.project?.project_end_date)}</h6>
                                    <h6 className="list-group-item">Quản lý:
                                        <div className="avatar avatar-sm px-2">
                                            <img src={Common.ENV + taskInfo?.project?.project_manager?.avatar} alt="" srcSet="" />
                                        </div>
                                        {taskInfo?.project?.project_manager?.fullname}
                                    </h6>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-8" style={{ borderLeft: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">THÔNG TIN CÔNG VIỆC</h5>
                                        <button
                                            className='btn btn-sm btn-primary'
                                            onClick={toggleModalTaskUpdate}>
                                            Chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Tiêu đề: {taskInfo.title}</h6>
                                    <h6 className="list-group-item">Người tạo:
                                        <div className="avatar avatar-sm px-2">
                                            <img src={Common.ENV + taskInfo?.user_create?.avatar} alt="" srcSet="" />
                                        </div>
                                        {taskInfo?.user_create?.fullname}</h6>
                                    <h6 className="list-group-item">Trạng thái: {TypeCode.PROJECT.STATUS_MAPPING[taskInfo.status]} - Mức độ ưu tiên: {TypeCode.TASK.PRIORITY_MAPPING[taskInfo.priority]}</h6>
                                    <h6 className="list-group-item">Chỉnh sửa lần cuối: {formatDate(taskInfo.update_at)} <div className="avatar avatar-sm px-2">
                                        <img src={Common.ENV + taskInfo?.user_create?.avatar} alt="" srcSet="" />
                                    </div>
                                        {taskInfo?.user_create?.fullname}</h6>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-4" style={{ borderRight: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">Chi tiết công việc</h5>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Phân công cho:
                                        <div className="avatar avatar-sm px-2">
                                            <img src={Common.ENV + taskInfo?.assign?.avatar} alt="" srcSet="" />
                                        </div>
                                        {taskInfo?.assign?.fullname}</h6>
                                    <h6 className="list-group-item">Ngày bắt đầu: {formatDate(taskInfo.task_start_date)}</h6>
                                    <h6 className="list-group-item">Ngày kết thúc: {formatDate(taskInfo.task_end_date)}</h6>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-8" style={{ borderLeft: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">Mô tả:</h5>
                                    </div>
                                    <div className="pre-line">
                                        {taskInfo.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="row" id="table-striped">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">LỊCH SỬ HOẠT ĐỘNG</h4>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-content px-3 pb-3">
                                        {
                                            historyList.length > 0 && historyList.map((item, idx) => (
                                                <div className="row" key={idx}>
                                                    <div className="col-12">
                                                        <div className="card">
                                                            <div className="media d-flex align-items-center">
                                                                <div className="avatar me-3">
                                                                    <img src={Common.ENV + item.user_create.avatar} alt="" srcSet="" />
                                                                    <span className="avatar-status bg-success" />
                                                                </div>
                                                                <div className="name flex-grow-1">
                                                                    <h6 className="mb-0">{item.user_create.fullname}</h6>
                                                                    <div className="d-flex justify-content-between">
                                                                        <span className="text-xs">{formatDateTime(item.created_at)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-grey pt-4">
                                                                <div className="chat-message pre-line">
                                                                    <ul>
                                                                        {item.project && <li><h6><strong>Dự án</strong> thay đổi từ <strong>{item?.old_project?.project_name + ' - ' + item?.new_project?.project_name}</strong>.</h6></li>}
                                                                        {item.title && <li><h6><strong>Tiêu đề</strong> thay đổi từ <strong>{item.old_title + ' - ' + item.new_title}</strong>.</h6></li>}
                                                                        {item.description && <li><h6><strong>Mô tả</strong> <strong>đã được cập nhật</strong>.</h6></li>}
                                                                        {item.category && <li><h6><strong>Phân loại</strong> thay đổi từ <strong>{TypeCode.PROJECT.CATEGORY_MAPPING[item.old_category] + ' - ' + TypeCode.PROJECT.CATEGORY_MAPPING[item.new_category]}</strong>.</h6></li>}
                                                                        {item.status && <li><h6><strong>Trạng thái</strong> thay đổi từ <strong>{TypeCode.PROJECT.STATUS_MAPPING[item.old_status] + ' - ' + TypeCode.PROJECT.STATUS_MAPPING[item.new_status]}</strong>.</h6></li>}
                                                                        {item.priority && <li><h6><strong>Độ ưu tiên</strong> thay đổi từ <strong>{TypeCode.TASK.PRIORITY_MAPPING[item.old_priority] + ' - ' + TypeCode.TASK.PRIORITY_MAPPING[item.new_priority]}</strong>.</h6></li>}
                                                                        {item.task_start_date && <li><h6><strong>Ngày bắt đầu</strong> thay đổi từ <strong>{formatDate(item.old_task_start_date) + ' - ' + formatDate(item.new_task_start_date)}</strong>.</h6></li>}
                                                                        {item.task_end_date && <li><h6><strong>Ngày kết thúc</strong> thay đổi từ <strong>{formatDate(item.old_task_end_date) + ' - ' + formatDate(item.new_task_end_date)}</strong>.</h6></li>}
                                                                        {item.estimate_time && <li><h6><strong>Thời gian dự kiến</strong> thay đổi từ <strong>{(item.old_estimate_time ? item.old_estimate_time : 0) + 'h - ' + item.new_estimate_time}h</strong>.</h6></li>}
                                                                        {item.actual_time && <li><h6><strong>Thời gian thực tế</strong> thay đổi từ <strong>{(item.old_actual_time ? item.old_actual_time : 0) + 'h - ' + item.new_actual_time}h</strong>.</h6></li>}
                                                                        {item.assign && <li><h6><strong>Phân công</strong> cho thay đổi từ
                                                                            <div className="avatar avatar-sm px-2">
                                                                                <img src={Common.ENV + item?.old_assign?.avatar} alt="" srcSet="" />
                                                                            </div>
                                                                            <strong>{item?.old_assign?.fullname + ' - '}</strong>
                                                                            <div className="avatar avatar-sm px-2">
                                                                                <img src={Common.ENV + item?.new_assign?.avatar} alt="" srcSet="" />
                                                                            </div>
                                                                            <strong>{item?.new_assign?.fullname}</strong>.</h6></li>}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {
                                            historyList.length <= 0 && <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                                        }
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card-content px-3 pb-3">
                                        {
                                            commentList.length > 0 && commentList.map((item, idx) => (
                                                <div className="row" key={idx}>
                                                    <div className="col-12">
                                                        <div className="card">
                                                            <div className="media d-flex align-items-center">
                                                                <div className="avatar me-3">
                                                                    <img src={Common.ENV + item.user_create.avatar} alt="" srcSet="" />
                                                                    <span className="avatar-status bg-success" />
                                                                </div>
                                                                <div className="name flex-grow-1">
                                                                    <h6 className="mb-0">{item.user_create.fullname}</h6>
                                                                    <div className="d-flex justify-content-between">
                                                                        <span className="text-xs">{formatDateTime(item.created_at)}</span>
                                                                        <div className="d-flex justify-content-center">
                                                                            <span className="px-2 cursor-pointer"><i className="bi bi-pencil-fill"></i></span>
                                                                            <span onClick={() => toggleModalConfirmDeleteComment(item._id, item?.user_create?.fullname)} className="px-2 cursor-pointer"><i className="bi bi-trash-fill"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-grey pt-4">
                                                                <div className="chat-message pre-line">
                                                                    {item.comment}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {
                                            commentList.length <= 0 && <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">GHI CHÚ</h5>
                                    </div>
                                </div>
                                <form className="form form-vertical px-5" onSubmit={handleSubmit(_onSubmit)}>
                                    <div className="form-body">
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Mô tả:</h6></label>
                                                    <div className="position-relative">
                                                        <textarea
                                                            type="text"
                                                            rows={5}
                                                            className="form-control"
                                                            {...register(
                                                                "comment",
                                                                {
                                                                    required: {
                                                                        value: true,
                                                                        message: replaceString(Message.TEXT.REQUIRED, ["Bình luận"]),
                                                                    },
                                                                    maxLength: {
                                                                        value: Validation.TEXT.MAX_LENGTH,
                                                                        message: replaceString(Message.TEXT.MAX_LENGTH, ["Bình luận", Validation.TEXT.MAX_LENGTH]),
                                                                    },
                                                                    minLength: {
                                                                        value: Validation.TEXT.MIN_LENGTH,
                                                                        message: replaceString(Message.TEXT.MIN_LENGTH, ["Bình luận", Validation.TEXT.MIN_LENGTH]),
                                                                    },
                                                                }
                                                            )}
                                                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                        />
                                                        {errors.comment && (
                                                            <FormFeedback className="d-block">{errors.comment.message}</FormFeedback>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>File tải lên:</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                <button type="button" className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom">Hủy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                modalTaskUpdate &&
                <TaskUpdateScreen
                    modal={modalTaskUpdate}
                    toggle={toggleModalTaskUpdate}
                    taskInfo={taskInfo}
                    taskId={taskId}
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

            {
                modalConfirmDeleteComment &&
                <ModalConfirmDeleteCommentComponent
                    modal={modalConfirmDeleteComment}
                    toggle={toggleModalConfirmDeleteComment}
                    keyWord={keyWord}
                    _onCallback={_onDelete}
                    id={commentId}
                />
            }
        </>
    )
}