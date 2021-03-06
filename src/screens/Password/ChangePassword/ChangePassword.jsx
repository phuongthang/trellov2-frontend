import React, { useState, useEffect } from "react";

//component
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";
import ModalSuccessComponent from "../../../components/Modal/ModalSuccess/ModalSuccess";

//packet
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//constant
import Common from "../../../constants/common";
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../../utils/utils";
import Message from './../../../constants/message';
import Validation from "../../../constants/validation";
import LinkName from "../../../constants/linkName";
import { replaceString } from './../../../utils/helpers';

//api
import authApi from './../../../api/authApi';

export default function ChangePasswordScreen(props) {
    /**
     * get property
     */

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, control, watch, setValue, formState: { errors } } = methods;

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [userData, setUserData] = useState({});
    const [disableButton, setDisableButton] = useState(true);


    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    const watchNewPassword = watch('new_password');
    const watchPassword = watch('password');

    useEffect(()=>{
        if(getValues('new_password') && getValues('password')){
            if(getValues('new_password') === getValues('password')){
                setDisableButton(false);
            }else{
                setDisableButton(true);
            }
        }else{
            setDisableButton(true);
        }
    },[watchNewPassword, watchPassword]);


    const _onSubmit = () => {

        const data = {
            _id: userData._id,
            old_password: getValues('old_password'),
            password: getValues('password')
        }

        authApi.change(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || '?????i m???t kh???u th??nh c??ng !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || '?????i m???t kh???u th???t b???i. Vui l??ng th??? l???i !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || '?????i m???t kh???u th???t b???i. Vui l??ng th??? l???i !');
                    toggleModalError();
                }
            }
        );
    }

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
        <section id="basic-vertical-layouts">
            <div className="row match-height">
                <div className="col-md-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">?????I M???T KH???U</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <FormProvider {...methods}>
                                    <form className="form form-vertical" onSubmit={handleSubmit(_onSubmit)}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-center mt-3">
                                                    <div className="avatar avatar-xls me-3">
                                                        <img src={Common.ENV + userData.avatar} alt="" srcSet="" />
                                                        <span className="avatar-xl-status bg-success"></span>
                                                    </div>
                                                </div>
                                                <h5 className="mt-2 text-center">{userData.fullname}</h5>
                                                <div className="text-mute text-center"><h6>{userData.email}</h6></div>
                                                <div className="box-change-password">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">
                                                                    <h6 className="required">M???t kh???u c??:</h6>
                                                                </label>
                                                                <div className="form-group position-relative mb-4">
                                                                    <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        {...register(
                                                                            "old_password",
                                                                            {
                                                                                required: {
                                                                                    value: true,
                                                                                    message: replaceString(Message.TEXT.REQUIRED, ["M???t kh???u c??"]),
                                                                                },
                                                                                pattern: {
                                                                                    value: new RegExp(Validation.PASSWORD.PATTERN),
                                                                                    message: Message.PASSWORD.PATTERN
                                                                                },
                                                                                minLength: {
                                                                                    value: Validation.PASSWORD.MIN_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MIN_LENGTH, ["M???t kh???u c??", Validation.PASSWORD.MIN_LENGTH]),
                                                                                },
                                                                                maxLength: {
                                                                                    value: Validation.PASSWORD.MAX_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MAX_LENGTH, ["M???t kh???u c??", Validation.PASSWORD.MAX_LENGTH]),
                                                                                },
                                                                            }
                                                                        )}
                                                                        onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                    />
                                                                    {errors.old_password && (
                                                                        <FormFeedback className="d-block">{errors.old_password.message}</FormFeedback>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">
                                                                    <h6 className="required">M???t kh???u m???i:</h6>
                                                                </label>
                                                                <div className="form-group position-relative mb-4">
                                                                    <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        {...register(
                                                                            "password",
                                                                            {
                                                                                required: {
                                                                                    value: true,
                                                                                    message: replaceString(Message.TEXT.REQUIRED, ["M???t kh???u m???i"]),
                                                                                },
                                                                                pattern: {
                                                                                    value: new RegExp(Validation.PASSWORD.PATTERN),
                                                                                    message: Message.PASSWORD.PATTERN
                                                                                },
                                                                                minLength: {
                                                                                    value: Validation.PASSWORD.MIN_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MIN_LENGTH, ["M???t kh???u m???i", Validation.PASSWORD.MIN_LENGTH]),
                                                                                },
                                                                                maxLength: {
                                                                                    value: Validation.PASSWORD.MAX_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MAX_LENGTH, ["M???t kh???u m???i", Validation.PASSWORD.MAX_LENGTH]),
                                                                                },
                                                                            }
                                                                        )}
                                                                        onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                    />
                                                                    {errors.password && (
                                                                        <FormFeedback className="d-block">{errors.password.message}</FormFeedback>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">
                                                                    <h6 className="required">X??c nh???n m???t kh???u m???i:</h6>
                                                                </label>
                                                                <div className="form-group position-relative mb-4">
                                                                    <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        {...register(
                                                                            "new_password",
                                                                            {
                                                                                required: {
                                                                                    value: true,
                                                                                    message: replaceString(Message.TEXT.REQUIRED, ["X??c nh???n m???t kh???u m???i"]),
                                                                                },
                                                                                pattern: {
                                                                                    value: new RegExp(Validation.PASSWORD.PATTERN),
                                                                                    message: Message.PASSWORD.PATTERN
                                                                                },
                                                                                minLength: {
                                                                                    value: Validation.PASSWORD.MIN_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MIN_LENGTH, ["X??c nh???n m???t kh???u m???i", Validation.PASSWORD.MIN_LENGTH]),
                                                                                },
                                                                                maxLength: {
                                                                                    value: Validation.PASSWORD.MAX_LENGTH,
                                                                                    message: replaceString(Message.PASSWORD.MAX_LENGTH, ["X??c nh???n m???t kh???u m???i", Validation.PASSWORD.MAX_LENGTH]),
                                                                                },
                                                                            }
                                                                        )}
                                                                        onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                                                    />
                                                                    {errors.new_password && (
                                                                        <FormFeedback className="d-block">{errors.new_password.message}</FormFeedback>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-center">
                                                    <button type="submit" disabled={disableButton} className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">?????i m???t kh???u</button>
                                                    <button type="button" className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom">H???y</button>
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
    );
}