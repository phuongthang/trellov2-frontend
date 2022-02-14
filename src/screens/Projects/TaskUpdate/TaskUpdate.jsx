import React, { useState, useEffect } from "react";

//component
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";
import ModalSuccessComponent from "../../../components/Modal/ModalSuccess/ModalSuccess";

//packet
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "reactstrap";

//constant
import Common from "../../../constants/common";
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../../utils/utils";
import TypeCode from './../../../constants/typeCode';
import Message from './../../../constants/message';
import Validation from "../../../constants/validation";
import LinkName from "../../../constants/linkName";
import { replaceString } from './../../../utils/helpers';

//api
import projectApi from './../../../api/projectApi';
import taskApi from './../../../api/taskApi';
import commentApi from './../../../api/commentApi';
import historyApi from "../../../api/historyApi";

//icon
import { TiDelete } from "react-icons/ti";

export default function TaskUpdateScreen(props) {
    /**
     * get property
     */
    const { modal, toggle, taskInfo, taskId } = props;

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, control, watch, setValue, formState: { errors } } = methods;

    const arrParameterString = ['title', 'description', 'task_start_date', 'task_end_date', 'estimate_time', 'actual_time'];
    const arrParameterNumber = ['status', 'category', 'priority'];
    const arrParameterObject = ['project', 'assign'];

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [projectList, setProjectList] = useState([]);
    const [userData, setUserData] = useState({});
    const [isFirstTimeLoad, setFirstTimeLoad] = useState(true);

    const [taskCategoryList, setTaskCategoryList] = useState([]);
    const [taskStatusList, setTaskStatusList] = useState([]);
    const [taskMemberList, setTaskMemberList] = useState([]);
    const [taskParentList, setTaskParentList] = useState([]);

    const [fileComments, setFileComments] = useState(null);
    const [fileTasks, setFileTasks] = useState(null);

    const setValueFormInput = (data) => {
        setValue('project', data?.project?._id ? data?.project?._id : '');
        setValue('category', (data.category || data.category === TypeCode.PROJECT.CATEGORY.OTHER) ? '' + data.category : TypeCode.PROJECT.CATEGORY.FEATURE);
        setValue('status', (data.status || data.status === TypeCode.PROJECT.STATUS.OTHER) ? '' + data.status : TypeCode.PROJECT.STATUS.NEW);
        setValue('priority', (data.priority || data.priority === TypeCode.TASK.PRIORITY.OTHER) ? '' + data.priority : TypeCode.TASK.PRIORITY.LOW);
        setValue('description', data.description ? data.description : '');
        setValue('title', data.title ? data.title : '');
        setValue('parent_task', data?.parent_task?._id ? data?.parent_task?._id : '');
        setValue('assign', data?.assign?._id ? data?.assign?._id : '');
        setValue('task_start_date', data.task_start_date ? data.task_start_date : '');
        setValue('task_end_date', data.task_end_date ? data.task_end_date : '');
        setValue('estimate_time', data.estimate_time ? data.estimate_time : '');
        setValue('actual_time', data.actual_time ? data.actual_time : '');
    }

    /**
     * on change file
     * @param {*} e 
     */
    const _onChangeFileComments = (e) => {
        setFileComments(e.target.files);
    }

    /**
     * on change file
     * @param {*} e 
     */
    const _onChangeFileTasks = (e) => {
        setFileTasks(e.target.files);
    }


    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    /**
     * 
     * @param {*} get list project
     */

    const _getProjectList = () => {
        projectApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectList(response.data.projects);
                    _onDetail(response.data.projects[0]._id);
                    _getParentTask(response.data.projects[0]._id);
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

    const _onDetail = (id) => {
        projectApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskCategoryList(response.data.project.category);
                    setTaskStatusList(response.data.project.status);
                    let memberList = response.data.project.members;
                    memberList.push(response.data.project.project_manager);
                    setTaskMemberList(memberList);
                    if (isFirstTimeLoad) {
                        setValueFormInput(taskInfo);
                        setFirstTimeLoad(false);
                    }
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

    const _getParentTask = (id) => {
        taskApi.list(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setTaskParentList(response.data.tasks);
                }
                else {
                    setMessage(response.data.message || 'Lấy thông tin công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy thông tin công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _createComment = (isHistory, parameterList) => {
        const data = new FormData();
        if (fileComments) {
            for (const key of Object.keys(fileComments)) {
                data.append('files', fileComments[key]);
            }
        }
        data.append('comment', getValues('comment'));
        data.append('task', taskId);
        data.append('user_create', userData._id);
        data.append('user_edit', userData._id);


        commentApi.create(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    if (isHistory) {
                        _createHistory(parameterList);
                    } else {
                        setMessage(response.data.message || 'Đăng kí bình luận thành công !');
                        toggleModalSuccess();
                    }
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

    const _createHistory = (parameterList) => {
        historyApi.create(parameterList).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Cập nhật thông tin công việc thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Cập nhật thông tin công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Cập nhật thông tin công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onSubmit = () => {
        let isHistory = false;
        let parameterList = {
            task: taskId,
            user_create: userData._id,
        }
        arrParameterString.forEach((item) => {
            if (getValues(item) && getValues(item) !== taskInfo[item]) {
                isHistory = true;
                const oldItem = 'old_' + item;
                const newItem = 'new_' + item;
                parameterList[item] = true;
                parameterList[oldItem] = taskInfo[item];
                parameterList[newItem] = getValues(item);
            }
        });

        arrParameterNumber.forEach((item) => {
            if (getValues(item) && (taskInfo[item] || taskInfo[item] === 0)) {
                if (+getValues(item) !== +taskInfo[item]) {
                    isHistory = true;
                    const oldItem = 'old_' + item;
                    const newItem = 'new_' + item;
                    parameterList[item] = true;
                    parameterList[oldItem] = taskInfo[item];
                    parameterList[newItem] = parseInt(getValues(item), 10);
                }
            }
        });

        arrParameterObject.forEach((item) => {
            if (getValues(item) && (taskInfo[item])) {
                if (getValues(item) !== taskInfo[item]._id) {
                    isHistory = true;
                    const oldItem = 'old_' + item;
                    const newItem = 'new_' + item;
                    parameterList[item] = true;
                    parameterList[oldItem] = taskInfo[item]._id;
                    parameterList[newItem] = getValues(item);
                }
            }
        });

        const data = new FormData();
        if (fileTasks) {
            for (const key of Object.keys(fileTasks)) {
                data.append('files', fileTasks[key])
            }
        }

        if (getValues('parent_task')) {
            data.append('parent_task', getValues('parent_task'));
        }

        data.append('project', getValues('project') ? getValues('project') : projectList[0]._id);
        data.append('task_start_date', getValues('task_start_date'));
        data.append('task_end_date', getValues('task_end_date'));
        data.append('category', getValues('category') ? getValues('category') : taskCategoryList[0]);
        data.append('status', getValues('status') ? getValues('status') : taskStatusList[0]);
        data.append('title', getValues('title'));
        data.append('description', getValues('description'));
        data.append('priority', getValues('priority') ? getValues('priority') : TypeCode.TASK.PRIORITY.LOW);
        data.append('estimate_time', getValues('estimate_time'));
        data.append('actual_time', getValues('actual_time'));
        data.append('assign', getValues('assign') ? getValues('assign') : taskMemberList[0]._id);
        data.append('_id', taskId);

        taskApi.update(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    if (getValues('comment')) {
                        _createComment(isHistory, parameterList);
                    } else {
                        if (isHistory) {
                            _createHistory(parameterList);
                        } else {
                            setMessage(response.data.message || 'Cập nhật công việc thành công !');
                            toggleModalSuccess();
                        }
                    }
                }
                else {
                    setMessage(response.data.message || 'Cập nhật công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Cập nhật công việc thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const watchProject = watch('project');
    useEffect(() => {
        if (watchProject) {
            _onDetail(watchProject);
            _getParentTask(watchProject);
        }
    }, [watchProject]);

    useEffect(() => {
        if (token) {
            _getProjectList();
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
        <Modal
            isOpen={modal}
            className="modal-task-update">
            <FormProvider {...methods}>
                <form className="form form-vertical" onSubmit={handleSubmit(_onSubmit)}>
                    <section id="basic-vertical-layouts">
                        <div className="row match-height">
                            <div className="col-md-12 col-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="card-title">CHỈNH SỬA CÔNG VIỆC</h4>
                                        <TiDelete className="cursor-pointer" onClick={toggle} style={{width: '40px', height: '40px'}}/>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-xl-6 col-md-6 col-xs-6">
                                                        <div className="form-group has-icon-left">
                                                            <label htmlFor="first-name-icon text-bold-500"><h6>Dự án:</h6></label>
                                                            <div className="position-relative">
                                                                <select className="choices form-select"
                                                                    {...register("project")}
                                                                    disabled = {true}>
                                                                    {projectList.length > 0 && projectList.map((item, idx) => (
                                                                        <option key={idx} value={item._id}>{item.project_name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 col-xs-6">
                                                        <div className="form-group has-icon-left">
                                                            <label htmlFor="first-name-icon text-bold-500"><h6>Phân loại:</h6></label>
                                                            <div className="position-relative">
                                                                <select className="choices form-select"
                                                                    {...register("category")}>
                                                                    {taskCategoryList.length > 0 && taskCategoryList.map((item, idx) => (
                                                                        <option key={idx} value={item}>{TypeCode.PROJECT.CATEGORY_MAPPING[+item]}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12 col-md-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label htmlFor="first-name-icon text-bold-500">
                                                                <h6 className="required">Tiêu đề:</h6>
                                                            </label>
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    {...register(
                                                                        "title",
                                                                        {
                                                                            required: {
                                                                                value: true,
                                                                                message: replaceString(Message.TEXT.REQUIRED, ["Tiêu đề"]),
                                                                            },
                                                                            maxLength: {
                                                                                value: Validation.TEXT.MAX_LENGTH,
                                                                                message: replaceString(Message.TEXT.MAX_LENGTH, ["Tiêu đề", Validation.TEXT.MAX_LENGTH]),
                                                                            },
                                                                            minLength: {
                                                                                value: Validation.TEXT.MIN_LENGTH,
                                                                                message: replaceString(Message.TEXT.MIN_LENGTH, ["Tiêu đề", Validation.TEXT.MIN_LENGTH]),
                                                                            },
                                                                        }
                                                                    )}
                                                                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                />
                                                                {errors.title && (
                                                                    <FormFeedback className="d-block">{errors.title.message}</FormFeedback>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12 col-md-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label htmlFor="first-name-icon text-bold-500">
                                                                <h6 className="required">Mô tả:</h6>
                                                            </label>
                                                            <div className="position-relative">
                                                                <textarea
                                                                    type="text"
                                                                    rows={5}
                                                                    className="form-control"
                                                                    {...register(
                                                                        "description",
                                                                        {
                                                                            required: {
                                                                                value: true,
                                                                                message: replaceString(Message.TEXT.REQUIRED, ["Tiêu đề"]),
                                                                            },
                                                                            minLength: {
                                                                                value: Validation.TEXT.MIN_LENGTH,
                                                                                message: replaceString(Message.TEXT.MIN_LENGTH, ["Mô tả", Validation.TEXT.MIN_LENGTH]),
                                                                            },
                                                                        }
                                                                    )}
                                                                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                />
                                                            </div>
                                                            {errors.description && (
                                                                <FormFeedback className="d-block">{errors.description.message}</FormFeedback>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-xl-6 col-md-6 col-xs-6">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon"><h6>Trạng thái :</h6></label>
                                                                    <div className="position-relative">
                                                                        <select className="choices form-select"
                                                                            {...register("status")}>
                                                                            {taskStatusList.length > 0 && taskStatusList.map((item, idx) => (
                                                                                <option key={idx} value={item}>{TypeCode.PROJECT.STATUS_MAPPING[+item]}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon"><h6>Độ ưu tiên :</h6></label>
                                                                    <div className="position-relative">
                                                                        <select className="choices form-select"
                                                                            {...register("priority")}>
                                                                            <option value={TypeCode.TASK.PRIORITY.LOW}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.LOW]}</option>
                                                                            <option value={TypeCode.TASK.PRIORITY.NORMAL}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.NORMAL]}</option>
                                                                            <option value={TypeCode.TASK.PRIORITY.HIGH}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.HIGH]}</option>
                                                                            <option value={TypeCode.TASK.PRIORITY.URGENT}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.URGENT]}</option>
                                                                            <option value={TypeCode.TASK.PRIORITY.OTHER}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.OTHER]}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon"><h6>Phân công cho :</h6></label>
                                                                    <div className="position-relative">
                                                                        <select className="choices form-select"
                                                                            {...register("assign")}>
                                                                            {taskMemberList.length > 0 && taskMemberList.map((item, idx) => (
                                                                                <option key={idx} value={item._id}>{item.fullname}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-md-6 col-xs-6">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon"><h6>Công việc cha :</h6></label>
                                                                    <div className="position-relative">
                                                                        <select className="choices form-select"
                                                                            {...register("parent_task")}>
                                                                            <option value="">Không có</option>
                                                                            {
                                                                                taskParentList.length > 0 && taskParentList.map((item, idx) => (
                                                                                    <option key={idx} value={item._id}>{item.title}</option>
                                                                                ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Ngày bắt đầu :</h6></label>
                                                                    <div className="position-relative">
                                                                        <Controller
                                                                            control={control}
                                                                            name="task_start_date"
                                                                            render={({ field: {
                                                                                onChange,
                                                                                onBlur,
                                                                                value
                                                                            } }) => (
                                                                                <DatePicker
                                                                                    dateFormat="dd/MM/yyyy"
                                                                                    className="form-control"
                                                                                    name="task_start_date"
                                                                                    autoComplete="off"
                                                                                    onChange={onChange}
                                                                                    onBlur={onBlur}
                                                                                    selected={value ? moment(value).toDate() : value}

                                                                                />
                                                                            )}
                                                                        />
                                                                    </div>
                                                                    {errors.task_start_date && (
                                                                        <FormFeedback className="d-block">{errors.task_start_date.message}</FormFeedback>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Ngày kết thúc :</h6></label>
                                                                    <div className="position-relative">
                                                                        <Controller
                                                                            control={control}
                                                                            name="task_end_date"
                                                                            render={({ field: {
                                                                                onChange,
                                                                                onBlur,
                                                                                value
                                                                            } }) => (
                                                                                <DatePicker
                                                                                    dateFormat="dd/MM/yyyy"
                                                                                    className="form-control"
                                                                                    name="task_end_date"
                                                                                    autoComplete="off"
                                                                                    onChange={onChange}
                                                                                    onBlur={onBlur}
                                                                                    selected={value ? moment(value).toDate() : value}

                                                                                />
                                                                            )}
                                                                        />
                                                                    </div>
                                                                    {errors.task_end_date && (
                                                                        <FormFeedback className="d-block">{errors.task_end_date.message}</FormFeedback>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Thời gian ước tính :</h6></label>
                                                                    <div className="position-relative">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            {...register(
                                                                                "estimate_time"
                                                                            )}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Thời gian thực tế :</h6></label>
                                                                    <div className="position-relative">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            {...register(
                                                                                "actual_time"
                                                                            )}
                                                                        />
                                                                    </div>
                                                                </div>
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
                                                                    onChange={_onChangeFileTasks}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <hr />
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
                                        <div className="form-body px-5">
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
                                                                onChange={_onChangeFileComments}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                                        onClick={toggle}
                                                    >Hủy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                    {
                        modalSuccess &&
                        <ModalSuccessComponent
                            modal={modalSuccess}
                            toggle={toggleModalSuccess}
                            message={message}
                        />
                    }
                </form>
            </FormProvider>
        </Modal>
    );
}