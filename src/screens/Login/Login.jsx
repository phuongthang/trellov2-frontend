import React from 'react'

//lottie
import Lottie from 'react-lottie';
import welcome from '../../assets/lottie/welcome.json'

//packet
import { useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";

//constant
import { replaceString } from './../../utils/helpers';
import Message from '../../constants/message';
import Validation from '../../constants/validation';
import Common from './../../constants/common';

//api
import authApi from './../../api/authApi';
import LinkName from './../../constants/linkName';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ModalAuth from '../../components/Modal/ModalAuth/ModalAuth';

export default function LoginScreen() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: welcome,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    let navigate = useNavigate();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = methods;

    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    /**
     * close/open modal login notification
     */
    const [modalAuth, setModalAuth] = useState(false);
    const toggleModalAuth = () => {
        setModalAuth(!modalAuth);
    }

    /**
     * on submit form
     */
    const _onSubmit = () => {
        const data = {
            email: getValues('email'),
            password: getValues('password'),
        }
        authApi.login(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    navigate(LinkName.HOME);
                }
                else {
                    navigate(LinkName.ERROR_500);
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED){
                    toggleModalAuth();
                }else{
                    navigate(LinkName.ERROR_500);
                }
            }
        );
    }

    useEffect(()=> {
        localStorage.clear();
    },[]);

    /**
     * render template
     */
    return (
        <div id="auth">
            <div className="row h-100">
                <div className="col-lg-5 col-12">
                    <div id="auth-left">
                        <div className="auth-logo">
                            <Lottie options={defaultOptions}
                                height={200}
                                width={200} />
                        </div>
                        <h1 className="auth-title">Log in.</h1>
                        <form onSubmit={handleSubmit(_onSubmit)}>
                            <div className="form-group position-relative mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-xl"
                                    placeholder="Email"
                                    {...register(
                                        "email",
                                        {
                                            required: {
                                                value: true,
                                                message: replaceString(Message.TEXT.REQUIRED, ["Email"]),
                                            },
                                            pattern: {
                                                value: new RegExp(Validation.EMAIL.PATTERN),
                                                message: Message.EMAIL.PATTERN
                                            },
                                            maxLength: {
                                                value: Validation.EMAIL.MAX_LENGTH,
                                                message: replaceString(Message.EMAIL.MAX_LENGTH, ["Email", Validation.EMAIL.MAX_LENGTH]),
                                            },
                                        }
                                    )}
                                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                />
                                {errors.email && (
                                    <FormFeedback className="d-block">{errors.email.message}</FormFeedback>
                                )}
                            </div>
                            <div className="form-group position-relative mb-4">
                                <input
                                    type="password"
                                    className="form-control form-control-xl"
                                    placeholder="Password"
                                    {...register(
                                        "password",
                                        {
                                            required: {
                                                value: true,
                                                message: replaceString(Message.TEXT.REQUIRED, ["Mật khẩu"]),
                                            },
                                            pattern: {
                                                value: new RegExp(Validation.PASSWORD.PATTERN),
                                                message: Message.PASSWORD.PATTERN
                                            },
                                            minLength: {
                                                value: Validation.PASSWORD.MIN_LENGTH,
                                                message: replaceString(Message.PASSWORD.MIN_LENGTH, ["Mật khẩu", Validation.PASSWORD.MIN_LENGTH]),
                                            },
                                            maxLength: {
                                                value: Validation.PASSWORD.MAX_LENGTH,
                                                message: replaceString(Message.PASSWORD.MAX_LENGTH, ["Mật khẩu", Validation.PASSWORD.MAX_LENGTH]),
                                            },
                                        }
                                    )}
                                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                />
                                {errors.password && (
                                    <FormFeedback className="d-block">{errors.password.message}</FormFeedback>
                                )}
                            </div>
                            <div className="form-check form-check-lg d-flex align-items-end">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    defaultValue
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label text-gray-600"
                                    htmlFor="flexCheckDefault"
                                >
                                    Duy trì đăng nhập
                                </label>
                            </div>
                            <button type='submit' className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="auth-right"></div>
                </div>
            </div>
            {
                modalAuth && 
                <ModalAuth
                    modal = {modalAuth}
                    toggle = {toggleModalAuth}
                />
            }
        </div>
    )
}