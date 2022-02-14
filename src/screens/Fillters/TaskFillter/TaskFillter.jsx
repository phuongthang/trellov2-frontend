import React, { useState, useEffect } from "react";

//Packet
import { Modal, FormFeedback } from "reactstrap";
import { useForm, Controller } from 'react-hook-form';
import { isEmpty } from 'underscore';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

//Constant
import TypeCode from './../../../constants/typeCode';
import Validation from "../../../constants/validation";
import { replaceString } from './../../../utils/helpers';
import Message from "../../../constants/message";
import Common from "../../../constants/common";
import LinkName from "../../../constants/linkName";

//api
import projectApi from './../../../api/projectApi';

//component
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";
import ModalSuccessComponent from "../../../components/Modal/ModalSuccess/ModalSuccess";

export default function TaskFillterComponent(props) {

    let navigate = useNavigate();

    /**
     * get property
     */
    const { modal, toggle, projectList, oldUserList, _onSearch, parameterQuery, setParameterQuery } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, control, watch, getValues, setValue, formState: { errors } } = methods;

    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    const [userList, setUserList] = useState([]);
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }
    /**
     * on submit
     */
    const _onSubmit = async () => {
        const params = {
            project: getValues('project'),
            category: parseInt(getValues('category', 10)),
            status: parseInt(getValues('status', 10)),
            assign: getValues('assign'),
            title: getValues('title'),
            priority: parseInt(getValues('priority', 10)),
            task_start_date: getValues('task_start_date'),
            task_end_date: getValues('task_end_date'),
        }

        const data = {}

        Object.entries(params).forEach(([key, value]) => {
            if ((value || value === 0) && value != TypeCode.FILLTER.ALL) {
                data[key] = value;
            }
        });
        setParameterQuery(data);
        await _onSearch(data);
        toggle();
    }

    const _onDetail = (id) => {
        projectApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    let memberList = response.data.project.members;
                    memberList.push(response.data.project.project_manager);
                    setUserList(memberList);
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

    useEffect(() => {
        if (!isEmpty(parameterQuery)) {
            setValue('project', parameterQuery.project ? parameterQuery.project : TypeCode.FILLTER.ALL);
            setValue('category', (parameterQuery.category || parameterQuery.category === TypeCode.PROJECT.CATEGORY.OTHER) ? '' + parameterQuery.category : TypeCode.FILLTER.ALL);
            setValue('status', (parameterQuery.status || parameterQuery.status === TypeCode.PROJECT.STATUS.OTHER) ? '' + parameterQuery.status : TypeCode.FILLTER.ALL);
            setValue('priority', (parameterQuery.priority || parameterQuery.priority === TypeCode.TASK.PRIORITY.OTHER) ? '' + parameterQuery.priority : TypeCode.FILLTER.ALL);
            setValue('title', parameterQuery.title ? parameterQuery.title : '');
            setValue('assign', parameterQuery.assign ? parameterQuery.assign : TypeCode.FILLTER.ALL);
            setValue('task_start_date', parameterQuery.task_start_date ? parameterQuery.task_start_date : '');
            setValue('task_end_date', parameterQuery.task_end_date ? parameterQuery.task_end_date : '');
        }
    }, []);

    useEffect(() => {
        if (oldUserList) {
            setUserList(oldUserList);
        }
    }, [oldUserList]);

    const watchProject = watch('project');
    useEffect(() => {
        if (watchProject && (+watchProject !== TypeCode.FILLTER.ALL)) {
            _onDetail(watchProject);
        }else{
            setUserList(oldUserList);
        }
    }, [watchProject]);

    /**
     * render template
     */
    return (
        <Modal
            isOpen={modal}
            className="modal-task-fillter">
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">TÌM KIẾM CÔNG VIỆC</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit(_onSubmit)}>
                                        <div className="form-body">
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-6">
                                                    <h6>Dự án :</h6>
                                                    <select className="choices form-select"
                                                        {...register("project")}
                                                    >
                                                        <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                                        {
                                                            projectList.length > 0 && projectList.map((item, idx) => (
                                                                <option key = {idx} value={item._id}>{item.project_name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Tiêu đề :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Tiêu đề"
                                                        {...register(
                                                            "title",
                                                            {
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
                                                        onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }} />
                                                </div>
                                                {errors.title && (
                                                    <FormFeedback className="d-block">{errors.title.message}</FormFeedback>
                                                )}
                                            </div>
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6>Phân loại :</h6>
                                                    <select className="choices form-select"
                                                        {...register("category")}
                                                    >
                                                        <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                                        <option value={TypeCode.PROJECT.CATEGORY.FEATURE}>{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.FEATURE]}</option>
                                                        <option value={TypeCode.PROJECT.CATEGORY.BUG}>{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.BUG]}</option>
                                                        <option value={TypeCode.PROJECT.CATEGORY.QA}>{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.QA]}</option>
                                                        <option value={TypeCode.PROJECT.CATEGORY.UPDATE}>{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.UPDATE]}</option>
                                                        <option value={TypeCode.PROJECT.CATEGORY.OTHER}>{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.OTHER]}</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Trạng thái :</h6>
                                                    <select className="choices form-select"
                                                        {...register("status")}
                                                    >
                                                        <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                                        <option value={TypeCode.PROJECT.STATUS.NEW}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.NEW]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.INPROGRESS}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.INPROGRESS]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.PENDING}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.PENDING]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.FEEDBACK}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.FEEDBACK]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.WAITTING_REVIEW}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.WAITTING_REVIEW]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.RESOLVED}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.RESOLVED]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.CLOSED}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.CLOSED]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.REJECT}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.REJECT]}</option>
                                                        <option value={TypeCode.PROJECT.STATUS.OTHER}>{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.OTHER]}</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Mức độ ưu tiên :</h6>
                                                    <select className="choices form-select"
                                                        {...register("priority")}
                                                    >
                                                        <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                                        <option value={TypeCode.TASK.PRIORITY.LOW}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.LOW]}</option>
                                                        <option value={TypeCode.TASK.PRIORITY.NORMAL}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.NORMAL]}</option>
                                                        <option value={TypeCode.TASK.PRIORITY.HIGH}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.HIGH]}</option>
                                                        <option value={TypeCode.TASK.PRIORITY.URGENT}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.URGENT]}</option>
                                                        <option value={TypeCode.TASK.PRIORITY.OTHER}>{TypeCode.TASK.PRIORITY_MAPPING[TypeCode.TASK.PRIORITY.OTHER]}</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Phân công:</h6>
                                                    <select className="choices form-select"
                                                        {...register("assign")}
                                                    >
                                                        <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                                        {
                                                            userList.length > 0 && userList.map((item, idx) => (
                                                                <option value={item._id}>{item.fullname}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-6">
                                                    <h6>Ngày bắt đầu :</h6>
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
                                                    {errors.task_start_date && (
                                                        <FormFeedback className="d-block">{errors.task_start_date.message}</FormFeedback>
                                                    )}
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Ngày kết thúc :</h6>
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
                                                    {errors.task_end_date && (
                                                        <FormFeedback className="d-block">{errors.task_end_date.message}</FormFeedback>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Tìm kiếm</button>
                                                <button
                                                    type="button"
                                                    className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                                    onClick={toggle}
                                                >Hủy</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </section>
        </Modal >
    );
}