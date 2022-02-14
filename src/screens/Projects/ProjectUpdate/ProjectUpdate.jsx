import { useState, useEffect } from "react";

//Packet
import { Modal } from "reactstrap";
import { FormProvider, useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

//component
import InformationComponent from "./Information";
import MemberComponent from "./Member";
import CategoryComponent from "./Category";
import StatusComponent from "./Status";
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";
import ModalSuccessComponent from "../../../components/Modal/ModalSuccess/ModalSuccess";

//constant
import Common from "../../../constants/common";
import LinkName from "../../../constants/linkName";
import { getTokenFromLocalStorage } from "../../../utils/utils";
import { filterUserFromExperience, replaceString, getUserIdFromListUserSelected } from "../../../utils/helpers";
import TypeCode from "../../../constants/typeCode";
import Validation from "../../../constants/validation";
import Message from "../../../constants/message";

//api
import userApi from "../../../api/userApi";
import projectApi from "../../../api/projectApi";

//icon
import { TiDelete } from "react-icons/ti";



export default function ProjectUpdateScreen(props) {
    /**
     * get property
     */
    const { modal, toggle, id } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = methods;
    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    /**
     * define state 
     */
    const [userList, setUserList] = useState([]);
    const [projectManagerList, setProjectManagerList] = useState([]);
    const [usersMemberList, setUsersMemberList] = useState([]);
    const [userSelectedList, setUserSelectedList] = useState([]);
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

    const setValueFormInput = (data) => {
        setValue('project_name', data.project_name ? data.project_name : '');
        setValue('project_start_date', data.project_start_date ? data.project_start_date : '');
        setValue('project_end_date', data.project_end_date ? data.project_end_date : '');
        setValue('mode', data.mode ? '' + data.mode : '' + TypeCode.PROJECT.MODE.PUBLIC);
        setValue('project_status', (data.project_status || data.project_status === TypeCode.PROJECT.PROJECT_STATUS.CLOSED) ? '' + data.project_status : TypeCode.PROJECT.PROJECT_STATUS.CLOSED);
        setValue('description', data.description ? data.description : '');
        setValue('category', data.category ? data.category : []);
        setValue('status', data.status ? data.status : []);
        setValue('type', (data.type || data.type === TypeCode.PROJECT.TYPE.OTHER) ? '' + data.type : TypeCode.PROJECT.TYPE.OTHER)
        setValue('project_manager', data.project_manager ? data.project_manager._id : projectManagerList[0]._id);
        setUserSelectedList(data.members);
    }

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

    const _onDetail = (id) => {
        projectApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setValueFormInput(response.data.project);
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

    const _onSubmit = () => {
        const data = {
            _id: id,
            project_name: getValues('project_name'),
            project_start_date: getValues('project_start_date'),
            project_end_date: getValues('project_end_date'),
            project_manager: getValues('project_manager') ? getValues('project_manager') : projectManagerList[0]._id,
            mode: getValues('mode'),
            project_status: getValues('project_status'),
            description: getValues('description'),
            category: getValues('category'),
            status: getValues('status'),
            members: userSelectedList ? getUserIdFromListUserSelected(userSelectedList) : []
        }

        projectApi.update(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Cập nhật thông tin dự án thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Cập nhật thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Cập nhật thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    useEffect(() => {
        if (token) {
            _getListUser();
            _onDetail(id);
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        if (userList) {
            setProjectManagerList(filterUserFromExperience(userList, [TypeCode.USER.EXPERIENCE.PROJECT_MANAGER]));
            setUsersMemberList(filterUserFromExperience(userList, [TypeCode.USER.EXPERIENCE.STAFF, TypeCode.USER.EXPERIENCE.LEADER, TypeCode.USER.EXPERIENCE.OTHER]));
        }
    }, [userList]);

    /**
     * render template
     */
    return (
        <Modal
            isOpen={modal}
            className="modal-project-update">
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h4 className="card-title">CHỈNH SỬA DỰ ÁN</h4>
                                <TiDelete className="cursor-pointer" onClick={toggle} style={{width: '40px', height: '40px'}}/>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <FormProvider {...methods}>
                                        <form className="form form-vertical" onSubmit={handleSubmit(_onSubmit)}>
                                            <div className="form-body">
                                                <InformationComponent
                                                    _onBlur={_onBlur}
                                                    projectManagerList = {projectManagerList}
                                                />
                                                <div className="row">
                                                    <div className="col-xl-4 col-md-4 col-xs-4">
                                                        <div className="form-group has-icon-left">
                                                            <label htmlFor="first-name-icon text-bold-500"><h6>Chế độ :</h6></label>
                                                            <div className="position-relative">
                                                                <ul className="list-unstyled mb-0 pt-1">
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="public"
                                                                                    value={TypeCode.PROJECT.MODE.PUBLIC}
                                                                                    {...register(
                                                                                        "mode",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="public"><h6>Công khai</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="security"
                                                                                    defaultChecked
                                                                                    value={TypeCode.PROJECT.MODE.SECURITY}
                                                                                    {...register(
                                                                                        "mode",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="security"><h6>Bảo mật</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-4 col-xs-4">
                                                        <div className="form-group has-icon-left">
                                                            <label htmlFor="first-name-icon text-bold-500"><h6>Trạng thái :</h6></label>
                                                            <div className="position-relative">
                                                                <ul className="list-unstyled mb-0 pt-1">
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="opened"
                                                                                    defaultChecked
                                                                                    value={TypeCode.PROJECT.PROJECT_STATUS.OPENED}
                                                                                    {...register(
                                                                                        "project_status",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="opened"><h6>Đang mở</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="closed"
                                                                                    value={TypeCode.PROJECT.PROJECT_STATUS.CLOSED}
                                                                                    {...register(
                                                                                        "project_status",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="closed"><h6>Đã đóng</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-4 col-xs-4">
                                                        <div className="form-group has-icon-left">
                                                            <label htmlFor="first-name-icon text-bold-500"><h6>Loại :</h6></label>
                                                            <div className="position-relative">
                                                                <ul className="list-unstyled mb-0 pt-1">
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="outsource"
                                                                                    value={TypeCode.PROJECT.TYPE.OUTSOURCE}
                                                                                    defaultChecked
                                                                                    {...register(
                                                                                        "type",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="outsource"><h6>Outsource</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="product"
                                                                                    value={TypeCode.PROJECT.TYPE.PRODUCT}
                                                                                    {...register(
                                                                                        "type",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="product"><h6>Product</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="d-inline-block me-5 mb-1 mt-2">
                                                                        <div className="form-check">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                    className="form-check-input form-check-primary"
                                                                                    id="other"
                                                                                    value={TypeCode.PROJECT.TYPE.OTHER}
                                                                                    {...register(
                                                                                        "type",
                                                                                    )} />
                                                                                <label className="form-check-label"
                                                                                    htmlFor="other"><h6>Khác</h6></label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                                        "description",
                                                                        {
                                                                            minLength: {
                                                                                value: Validation.TEXT.MIN_LENGTH,
                                                                                message: replaceString(Message.TEXT.MIN_LENGTH, ["Mô tả", Validation.TEXT.MIN_LENGTH]),
                                                                            },
                                                                        }
                                                                    )}
                                                                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                />
                                                                {errors.description && (
                                                                    <FormFeedback className="d-block">{errors.description.message}</FormFeedback>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <CategoryComponent />
                                                    <StatusComponent />
                                                </div>
                                                <MemberComponent
                                                    usersMemberList={usersMemberList}
                                                    userSelectedList={userSelectedList}
                                                    setUserSelectedList={setUserSelectedList}
                                                />
                                                <div className="row">
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                        <button type="button" className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom" onClick={toggle}>Hủy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </FormProvider>
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
        </Modal>
    );
}