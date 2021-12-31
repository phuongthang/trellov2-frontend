import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//Constant
import Validation from '../../../constants/validation';
import Message from '../../../constants/message';
import { replaceString } from '../../../utils/helpers';

//icon
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function InformationComponent(props) {

    const { _onBlur } = props;
    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500">
                        <h6 className="required">Email :</h6>
                    </label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            {...register(
                                "email",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.REQUIRE, ["Email"]),
                                    },
                                    pattern: {
                                        value: new RegExp(Validation.EMAIL),
                                        message: Message.EMAIL_ERROR_FORMAT
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                        <div className="form-control-icon">
                            <MdEmail />
                        </div>
                    </div>
                    {errors.email && (
                        <FormFeedback className="d-block">{errors.email.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Email cá nhân :</h6></label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            {...register(
                                "email_person",
                                {
                                    pattern: {
                                        value: new RegExp(Validation.EMAIL),
                                        message: Message.EMAIL_ERROR_FORMAT
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                        <div className="form-control-icon">
                            <MdEmail />
                        </div>
                    </div>
                    {errors.email_person && (
                        <FormFeedback className="d-block">{errors.email_person.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Số điện thoại :</h6></label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            {...register(
                                "phone",
                                {
                                    pattern: {
                                        value: new RegExp(Validation.PHONE),
                                        message: Message.PHONE_ERROR_FORMAT
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                        <div className="form-control-icon">
                            <FaPhone />
                        </div>
                    </div>
                    {errors.phone && (
                        <FormFeedback className="d-block">{errors.phone.message}</FormFeedback>
                    )}
                </div>
            </div>
        </div>
    )
}