import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//Constant
import Validation from '../../../constants/validation';
import Message from '../../../constants/message';
import TypeCode from '../../../constants/typeCode';
import { replaceString } from '../../../utils/helpers';

//icon
import { RiUser2Fill } from "react-icons/ri";

export default function NameComponent(props) {

    const { _onBlur } = props;
    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row mt-3">
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500">
                        <h6 className="required">Họ và tên:</h6>
                    </label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            {...register(
                                "fullname",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.TEXT.REQUIRED, ["Họ tên"]),
                                    },
                                    maxLength: {
                                        value: Validation.TEXT.MAX_LENGTH,
                                        message: replaceString(Message.TEXT.MAX_LENGTH, ["Họ và tên", Validation.TEXT.MAX_LENGTH]),
                                    },
                                    minLength: {
                                        value: Validation.TEXT.MIN_LENGTH,
                                        message: replaceString(Message.TEXT.MIN_LENGTH, ["Họ và tên", Validation.TEXT.MIN_LENGTH]),
                                    },
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                        <div className="form-control-icon">
                            <RiUser2Fill />
                        </div>
                    </div>
                    {errors.fullname && (
                        <FormFeedback className="d-block">{errors.fullname.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500">
                        <h6 className="required">Chấm công :</h6>
                    </label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            {...register(
                                "username",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.TEXT.REQUIRED, ["Chấm công"]),
                                    },
                                    maxLength: {
                                        value: Validation.TEXT.MAX_LENGTH,
                                        message: replaceString(Message.TEXT.MAX_LENGTH, ["Chấm công", Validation.TEXT.MAX_LENGTH]),
                                    },
                                    minLength: {
                                        value: Validation.TEXT.MIN_LENGTH,
                                        message: replaceString(Message.TEXT.MIN_LENGTH, ["Chấm công", Validation.TEXT.MIN_LENGTH]),
                                    },
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                        <div className="form-control-icon">
                            <RiUser2Fill />
                        </div>
                    </div>
                    {errors.username && (
                        <FormFeedback className="d-block">{errors.username.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Loại tài khoản :</h6></label>
                    <div className="position-relative">
                        <ul className="list-unstyled mb-0 pt-1">
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="administrator"
                                            value={TypeCode.USER.ROLE.ADMINISTRATOR}
                                            {...register(
                                                "role",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="administrator"><h6>Administrator</h6></label>
                                    </div>
                                </div>
                            </li>
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="staff"
                                            value={TypeCode.USER.ROLE.STAFF}
                                            defaultChecked
                                            {...register(
                                                "role",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="staff"><h6>Staff</h6></label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}