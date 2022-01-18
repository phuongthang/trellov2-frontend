import { useState, useEffect } from "react";
//icon
import { RiDeleteBin5Fill } from "react-icons/ri";

//packet
import { FormProvider, useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";
import InformationComponent from "./Information";
import MemberComponent from "./Member";
import CategoryComponent from "./Category";
import StatusComponent from "./Status";
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";
import Common from "../../../constants/common";
import userApi from "../../../api/userApi";
import LinkName from "../../../constants/linkName";
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from "../../../utils/utils";
import { fillterUserFromExperience, replaceString } from "../../../utils/helpers";
import TypeCode from "../../../constants/typeCode";
import Validation from "../../../constants/validation";
import Message from "../../../constants/message";


export default function ProjectCreateScreen() {
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
    const [listProjectManager, setProjectManager] = useState([]);
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
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

    useEffect(() => {
        if (token) {
            _getListUser();
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        if (userList) {
            setProjectManager(fillterUserFromExperience(userList, [TypeCode.USER.EXPERIENCE.PROJECT_MANAGER]));
        }
    }, [userList]);

    /**
     * render template
     */
    return (
        <section id="basic-vertical-layouts">
            <div className="row match-height">
                <div className="col-md-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">TẠO DỰ ÁN</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <FormProvider {...methods}>
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <InformationComponent
                                                _onBlur={_onBlur}
                                            />
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
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
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon"><h6>Project Manager :</h6></label>
                                                        <div className="position-relative">
                                                            <select className="choices form-select"
                                                                {...register("project_manager")}
                                                            >
                                                                {listProjectManager.length > 0 && listProjectManager.map((item, idx) => (
                                                                    <option key={idx} value={item.fullname}>{item.fullname}</option>
                                                                ))}
                                                            </select>
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
                                                userList={userList}
                                            />
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                    <button type="button" className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom">Hủy</button>
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
        </section>
    );
}