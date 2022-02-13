import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

//icon
import { MdModeEditOutline } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";

//packet
import { FormProvider, useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";
import { useNavigate, useLocation } from 'react-router-dom';

//Component
import NameComponent from "./Name";
import InformationComponent from "./Information";
import PersonalComponent from "./Personal";
import OtherInformationComponent from "./OtherInformation";
import IdentityCardComponent from "./IdentityCard";
import ModalSuccessComponent from "../../../components/Modal/ModalSuccess/ModalSuccess";
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";

//Constant
import { replaceString } from "../../../utils/helpers";
import Validation from "../../../constants/validation";
import Message from "../../../constants/message";
import LinkName from "../../../constants/linkName";
import Common from "../../../constants/common";
import TypeCode from "../../../constants/typeCode";

import imgDefault from "../../../assets/icon/default.png";

//api
import userApi from './../../../api/userApi';

// utils
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from './../../../utils/utils';

export default function UserInformationScreen(props) {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();
    const url = window.location.pathname;
    const { state } = useLocation();

    const id = state?.userId || getUserDataFromLocalStorage()._id;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors } } = methods;

    /**
     * define state
     */
    const [avatarSrc, setAvatarSrc] = useState();
    const [subAvatarSrc, setSubAvatarSrc] = useState();
    const [avatar, setAvatar] = useState({});
    const [subAvatar, setSubAvatar] = useState({});
    const [isUploadAvatar, setUploadAvatar] = useState(false);
    const [isUploadSubAvatar, setUploadSubAvatar] = useState(false);
    const [data] = useState(getUserDataFromLocalStorage);
    const [isDisabled, setDisabled] = useState(true);

    /**
     * preview image
     * @param {*} setState 
     */
    const _onClick = (setStateSrc, setStateFile, setStateUpload) => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            let files = Array.from(input.files);
            setStateFile(files[0]);
            setStateUpload(true);
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function (e) {
                setStateSrc(reader.result);
            }
        }
        input.click();
    }

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const setValueFormInput = (data) => {
        setValue('fullname', data.fullname ? data.fullname : '');
        setValue('username', data.username ? data.username : '');
        setValue('personal_email', data.personal_email ? data.personal_email : '');
        setValue('role', data.role ? '' + data.role : '' + TypeCode.USER.ROLE.STAFF);
        setValue('email', data.email ? data.email : '');
        setValue('phone', data.phone ? data.phone : '');
        setValue('gender', (data.gender || data.gender === TypeCode.USER.GENDER.OTHER) ? '' + data.gender : TypeCode.USER.GENDER.MALE);
        setValue('workform', (data.workform || data.workform === TypeCode.USER.WORKFORM.OTHER) ? '' + data.workform : TypeCode.USER.WORKFORM.FULLTIME);
        setValue('birthday', data.birthday ? data.birthday : '');
        setValue('room', (data.room || data.room === TypeCode.USER.ROOM.OTHER) ? data.room : TypeCode.USER.ROOM.OUTSOURCE);
        setValue('position', (data.position || data.position === TypeCode.USER.POSITION.OTHER) ? data.position : TypeCode.USER.POSITION.DEVELOPER);
        setValue('experience', (data.experience || data.experience === TypeCode.USER.EXPERIENCE.OTHER) ? data.experience : TypeCode.USER.EXPERIENCE.STAFF);
        setValue('address', data.address ? data.address : '');
        setValue('identity_card', data.identity_card ? data.identity_card : '');
        setValue('identity_date', data.identity_date ? data.identity_date : '');
        setValue('identity_place', data.identity_place ? data.identity_place : '');
        setValue('bank_account', data.bank_account ? data.bank_account : '');
        setAvatarSrc(Common.ENV + data.avatar);
        setSubAvatarSrc(Common.ENV + data.sub_avatar);
    }

    const _onDetail = (id) => {
        userApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setValueFormInput(response.data.user);
                }
                else {
                    setMessage(response.data.message || 'Lấy thông tin nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy thông tin nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onCreate = (data) => {
        userApi.create(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Đăng kí tài khoản thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Đăng kí tài khoản thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Đăng kí tài khoản thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onUpdate = (data) => {
        userApi.update(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    if(url === LinkName.USER_INFORMATION){
                        localStorage.setItem('token', response.data.token);
                    }
                    setMessage(response.data.message || 'Cập nhật tài khoản thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Cập nhật tài khoản thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Cập nhật tài khoản thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onReset = () => {
        reset();
        setAvatarSrc(null);
        setSubAvatarSrc(null);
        setUploadAvatar(false);
        setUploadSubAvatar(false);
        for (let item of Object.keys(localStorage)) {
            if (!['token'].includes(item)) {
                localStorage.removeItem(item);
            }
        }
    }
    /**
     * on submit form
     */
    const _onSubmit = () => {
        if (token) {
            const data = new FormData();
            if (isUploadAvatar) {
                const avatarBlob = new Blob([avatar], { type: 'image' });
                data.append('avatar', avatarBlob, avatar.name);
            }
            if (isUploadSubAvatar) {
                const subAvatarBlob = new Blob([subAvatar], { type: 'image' });
                data.append('sub_avatar', subAvatarBlob, subAvatar.name);
            }

            data.append('fullname', getValues('fullname'));
            data.append('username', getValues('username'));
            data.append('role', getValues('role') ? parseInt(getValues('role'), 10) : TypeCode.USER.ROLE.STAFF);
            data.append('email', getValues('email'));
            data.append('personal_email', getValues('personal_email'));
            data.append('phone', getValues('phone'));
            data.append('gender', (getValues('gender') || parseInt(getValues('gender'), 10) === TypeCode.USER.GENDER.OTHER) ? parseInt(getValues('gender'), 10) : TypeCode.USER.GENDER.MALE);
            data.append('workform', (getValues('workform') || parseInt(getValues('workform'), 10) === TypeCode.USER.WORKFORM.OTHER) ? parseInt(getValues('workform'), 10) : TypeCode.USER.WORKFORM.FULLTIME);
            data.append('birthday', getValues('birthday'));
            data.append('room', (getValues('room') || parseInt(getValues('room'), 10) === TypeCode.USER.ROOM.OTHER) ? parseInt(getValues('room'), 10) : TypeCode.USER.ROOM.OUTSOURCE);
            data.append('position', (getValues('position') || parseInt(getValues('position'), 10) === TypeCode.USER.POSITION.OTHER) ? parseInt(getValues('position'), 10) : TypeCode.USER.POSITION.DEVELOPER);
            data.append('experience', (getValues('experience') || parseInt(getValues('experience'), 10) === TypeCode.USER.EXPERIENCE.OTHER) ? parseInt(getValues('experience'), 10) : TypeCode.USER.EXPERIENCE.STAFF);
            data.append('address', getValues('address'));
            data.append('identity_card', getValues('identity_card'));
            data.append('identity_date', getValues('identity_date'));
            data.append('identity_place', getValues('identity_place'));
            data.append('bank_account', getValues('bank_account'));

            if (url === LinkName.USER_CREATE) {
                _onCreate(data);
            } else {
                data.append('_id', id);
                _onUpdate(data);
            }


        } else {
            navigate(LinkName.LOGIN);
        }
    }

    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    useEffect(() => {
        setDisabled(false);
        if (window.location.pathname === LinkName.USER_CREATE) {
            _onReset(); 
        }
        else if (window.location.pathname === LinkName.USER_INFORMATION) {
            setValueFormInput(data);
            if (data.role === TypeCode.USER.ROLE.STAFF) {
                setDisabled(true);
            }
        } else if (window.location.pathname === LinkName.USER_UPDATE) {
            _onDetail(id);
            if (data.role === TypeCode.USER.ROLE.STAFF) {
                setDisabled(true);
            }
        }
        // eslint-disable-next-line
    }, [window.location.pathname]);

    /**
     * render template
     */
    return (
        <section id="basic-vertical-layouts">
            <div className="row match-height">
                <div className="col-md-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">THÔNG TIN CÁ NHÂN</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <FormProvider {...methods}>
                                    <form className="form form-vertical" onSubmit={handleSubmit(_onSubmit)}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Ảnh đại diện:</h6></label>
                                                        <div className="position-relative">
                                                            <div className="d-flex justify-content-center mt-3">
                                                                <div className="avatar avatar-xxl me-3">
                                                                    <img src={avatarSrc ? avatarSrc : imgDefault} alt="" srcSet="" />
                                                                    <span className="avatar-xxl-status bg-warning cursor-pointer" onClick={() => _onClick(setAvatarSrc, setAvatar, setUploadAvatar)}><MdModeEditOutline /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Ảnh chấm công:</h6></label>
                                                        <div className="position-relative">
                                                            <div className="d-flex justify-content-center mt-3">
                                                                <div className="avatar avatar-xxl me-3">
                                                                    <img src={subAvatarSrc ? subAvatarSrc : imgDefault} alt="" srcSet="" />
                                                                    <span disabled={isDisabled} className="avatar-xxl-status bg-warning cursor-pointer" onClick={() => _onClick(setSubAvatarSrc, setSubAvatar, setUploadSubAvatar)}><MdModeEditOutline /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NameComponent
                                                _onBlur={_onBlur}
                                                _disabled={isDisabled}
                                            />
                                            <InformationComponent
                                                _onBlur={_onBlur}
                                                _disabled={isDisabled}
                                            />
                                            <PersonalComponent
                                                _onBlur={_onBlur}
                                                _disabled={isDisabled}
                                            />
                                            <OtherInformationComponent
                                                _disabled={isDisabled} />

                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6 className="required">Địa chỉ thường trú :</h6></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                disabled={isDisabled}
                                                                {...register(
                                                                    "address",
                                                                    {
                                                                        required: {
                                                                            value: true,
                                                                            message: replaceString(Message.TEXT.REQUIRED, ["Địa chỉ thường trú"]),
                                                                        },
                                                                        minLength: {
                                                                            value: Validation.TEXT.MIN_LENGTH,
                                                                            message: replaceString(Message.TEXT.MIN_LENGTH, ["Địa chỉ thường trú", Validation.TEXT.MIN_LENGTH]),
                                                                        },
                                                                    }
                                                                )}
                                                                onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                            />
                                                        </div>
                                                        {errors.address && (
                                                            <FormFeedback className="d-block">{errors.address.message}</FormFeedback>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <IdentityCardComponent
                                                _onBlur={_onBlur}
                                                _disabled={isDisabled}
                                            />
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Tài khoản ngân hàng :</h6></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                disabled={isDisabled}
                                                                {...register(
                                                                    "bank_account"
                                                                )}
                                                                onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                            />
                                                            <div className="form-control-icon">
                                                                <BsFillCreditCardFill />
                                                            </div>
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
                                </FormProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalSuccess &&
                <ModalSuccessComponent
                    modal={modalSuccess}
                    toggle={toggleModalSuccess}
                    message={message}
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
        </section>
    );
}