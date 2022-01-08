import { useState } from "react";

//icon
import { MdModeEditOutline } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";

//packet
import { FormProvider, useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";
import { useNavigate } from 'react-router-dom';

//Component
import NameComponent from "./Name";
import InformationComponent from "./Information";
import PersonalComponent from "./Personal";
import OtherInformationComponent from "./OtherInformation";
import IdentityCardComponent from "./IdentityCard";

//Constant
import { replaceString } from "../../../utils/helpers";
import Validation from "../../../constants/validation";
import Message from "../../../constants/message";
import LinkName from "../../../constants/linkName";
import Common from "../../../constants/common";

//api
import userApi from './../../../api/userApi';
import { getTokenFromLocalStorage } from './../../../utils/utils';

export default function UserInformationScreen() {

    let navigate = useNavigate();
    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = methods;
    const token = getTokenFromLocalStorage();

    /**
     * define state
     */
    const [avatarSrc, setAvatarSrc] = useState();
    const [subAvatarSrc, setSubAvatarSrc] = useState();

    /**
     * preview image
     * @param {*} setState 
     */
    const _onClick = (setState) => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            let files = Array.from(input.files);
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function (e) {
                setState(reader.result);
            }
        }
        input.click();
    }

    const _onSubmit = () => {
        if (token) {
            const data = {
                fullname: getValues('fullname'),
                username: getValues('username'),
                role: getValues('role'),
                email: getValues('email'),
                personal_email: getValues('personal_email'),
                phone: getValues('phone'),
                gender: getValues('gender'),
                workform: getValues('workform'),
                birthday: getValues('birthday'),
                zoom: getValues('zoom'),
                position: getValues('position'),
                experience: getValues('experience'),
                address: getValues('address'),
                identity_card: getValues('identity_card'),
                identity_date: getValues('identity_date'),
                identity_place: getValues('identity_place'),
                bank_account: getValues('bank_account'),
            }

            userApi.create(data).then(
                (response) => {
                    if (response.status === Common.HTTP_STATUS.OK) {
                        console.log("OK");
                    }
                    else {
                        console.log("Fail");
                    }
                },
                (error) => {
                    if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                        navigate(LinkName.LOGIN);
                    } else {
                        navigate(LinkName.ERROR_500);
                    }
                }
            );
        }else{
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
                                                                    <img src={avatarSrc ? avatarSrc : "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1"} alt="" srcSet="" />
                                                                    <span className="avatar-xxl-status bg-warning cursor-pointer" onClick={() => _onClick(setAvatarSrc)}><MdModeEditOutline /></span>
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
                                                                    <img src={subAvatarSrc ? subAvatarSrc : "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1"} alt="" srcSet="" />
                                                                    <span className="avatar-xxl-status bg-warning cursor-pointer" onClick={() => _onClick(setSubAvatarSrc)}><MdModeEditOutline /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NameComponent
                                                _onBlur={_onBlur}
                                            />
                                            <InformationComponent
                                                _onBlur={_onBlur}
                                            />
                                            <PersonalComponent
                                                _onBlur={_onBlur}
                                            />
                                            <OtherInformationComponent />

                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6 className="required">Địa chỉ thường trú :</h6></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
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
                                            />
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Tài khoản ngân hàng :</h6></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
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
        </section>
    );
}