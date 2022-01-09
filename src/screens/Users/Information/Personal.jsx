import React from 'react';

//packet
import { useFormContext, Controller } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import moment from "moment";
import DatePicker from "react-datepicker";

//Constant
import Message from '../../../constants/message';
import TypeCode from '../../../constants/typeCode';
import { replaceString } from '../../../utils/helpers';

export default function PersonalComponent(props) {

    const { _disabled } = props;
    const { register, control, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Giới tính :</h6></label>
                    <div className="position-relative">
                        <ul className="list-unstyled mb-0 pt-1">
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="male"
                                            value={TypeCode.USER.GENDER.MALE}
                                            defaultChecked
                                            disabled={_disabled}
                                            {...register(
                                                "gender",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="male"><h6>Nam</h6></label>
                                    </div>
                                </div>
                            </li>
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="female"
                                            value={TypeCode.USER.GENDER.FEMALE}
                                            disabled={_disabled}
                                            {...register(
                                                "gender",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="female"><h6>Nữ</h6></label>
                                    </div>
                                </div>
                            </li>
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="gender_other"
                                            value={TypeCode.USER.GENDER.OTHER}
                                            disabled={_disabled}
                                            {...register(
                                                "gender",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="gender_other"><h6>Khác</h6></label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Hình thức làm việc :</h6></label>
                    <div className="position-relative">
                        <ul className="list-unstyled mb-0 pt-1">
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="fulltime"
                                            defaultChecked
                                            value={TypeCode.USER.WORKFORM.FULLTIME}
                                            disabled={_disabled}
                                            {...register(
                                                "workform",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="fulltime"><h6>Fulltime</h6></label>
                                    </div>
                                </div>
                            </li>
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="parttime"
                                            value={TypeCode.USER.WORKFORM.PARTTIME}
                                            disabled={_disabled}
                                            {...register(
                                                "workform",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="parttime"><h6>Parttime</h6></label>
                                    </div>
                                </div>
                            </li>
                            <li className="d-inline-block me-5 mb-1">
                                <div className="form-check">
                                    <div className="custom-control custom-checkbox">
                                        <input type="radio"
                                            className="form-check-input form-check-primary"
                                            id="workform_other"
                                            value={TypeCode.USER.WORKFORM.OTHER}
                                            disabled={_disabled}
                                            {...register(
                                                "workform",
                                            )} />
                                        <label className="form-check-label"
                                            htmlFor="workform_other"><h6>Khác</h6></label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-4">
                <div className="form-group">
                    <label htmlFor="first-name-icon"><h6 className="required">Ngày sinh :</h6></label>
                    <div className="position-relative">
                        <Controller
                            control={control}
                            name="birthday"
                            disabled={_disabled}
                            render={({ field: {
                                onChange,
                                onBlur,
                                value
                            } }) => (
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    name="birthday"
                                    autoComplete="off"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value ? moment(value).toDate() : value}

                                />
                            )}
                            rules={{
                                validate: (birthday) => {
                                    if (!birthday) {
                                        return replaceString(Message.TEXT.REQUIRED, ["Ngày sinh"]);
                                    }
                                },
                            }}
                        />
                    </div>
                    {errors.birthday && (
                        <FormFeedback className="d-block">{errors.birthday.message}</FormFeedback>
                    )}
                </div>
            </div>
        </div>
    )
}