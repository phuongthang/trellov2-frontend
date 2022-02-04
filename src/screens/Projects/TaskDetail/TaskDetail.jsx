//Component
import { useState, useEffect } from 'react';
import TaskUpdateScreen from './../TaskUpdate/TaskUpdate';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from '../../../utils/utils';
import { useForm } from 'react-hook-form';
import Common from '../../../constants/common';
import LinkName from '../../../constants/linkName';
import taskApi from './../../../api/taskApi';
import { formatDate } from '../../../utils/helpers';
import TypeCode from './../../../constants/typeCode';
import Message from './../../../constants/message';
import { FormFeedback } from 'reactstrap';
import Validation from '../../../constants/validation';
import { replaceString } from './../../../utils/helpers';
import commentApi from '../../../api/commentApi';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';
import { TiDelete } from "react-icons/ti";
import { formatDateTime } from './../../../utils/helpers';

export default function TaskDetailScreen(props) {

    /**
     * get property
     */
    const { id } = props;

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, watch, setValue, formState: { errors } } = methods;
    /**
     * define state
     */
    const [userData, setUserData] = useState({});
    const [taskInfo, setTaskInfo] = useState({});
    const [commentList, setCommentList] = useState([]);

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

    const _onSubmit = () => {
        const data = {
            comment: getValues('comment'),
            task: "61fa38eb414d04a188b81a7f",
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
            _onDetail("61fa38eb414d04a188b81a7f");
            _getCommentList("61fa38eb414d04a188b81a7f");
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
                                    <div>
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
                            <div className="card-content px-3 pb-3">
                                {
                                    commentList.length > 0 && commentList.map((item, idx) => (
                                        <>
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
                                                                        <span className="px-2 cursor-pointer"><i class="bi bi-pencil-fill"></i></span>
                                                                        <span className="px-2 cursor-pointer"><i class="bi bi-trash-fill"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-grey pt-4">
                                                            <div className="chat-message">
                                                                {item.comment}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    ))
                                }
                                <h6>Không có lịch sử hoạt động nào gần đây !</h6>
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