import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//Constant
import Message from '../../../constants/message';
import TypeCode from '../../../constants/typeCode';
import { replaceString } from '../../../utils/helpers';

export default function PersonalComponent(props) {

    const { register, formState: { errors } } = useFormContext();
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
                                            value={TypeCode.GENDER.MALE}
                                            defaultChecked
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
                                            value={TypeCode.GENDER.FEMALE}
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
                                            className="form-check-input form-check-success"
                                            id="gender_other"
                                            value={TypeCode.GENDER.OTHER}
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
                                            value={TypeCode.WORKFORM.FULLTIME}
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
                                            className="form-check-input form-check-secondary"
                                            id="parttime"
                                            value={TypeCode.WORKFORM.PARTTIME}
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
                                            className="form-check-input form-check-success"
                                            id="workform_other"
                                            value={TypeCode.WORKFORM.OTHER}
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
                        <input
                            type="date"
                            className="form-control"
                            {...register(
                                "birthday",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.REQUIRE, ["Ngày sinh"]),
                                    },
                                }
                                
                            )}
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