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
import { DiAndroid } from "react-icons/di";

export default function InformationComponent(props) {

    const { _onBlur } = props;
    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-md-12 col-xs-12">
                    <div className="form-group has-icon-left">
                        <label htmlFor="first-name-icon text-bold-500">
                            <h6 className="required">Dự án:</h6>
                        </label>
                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control"
                                {...register(
                                    "project_name",
                                    {
                                        required: {
                                            value: true,
                                            message: replaceString(Message.TEXT.REQUIRED, ["Dự án"]),
                                        },
                                        maxLength: {
                                            value: Validation.TEXT.MAX_LENGTH,
                                            message: replaceString(Message.TEXT.MAX_LENGTH, ["Dự án", Validation.TEXT.MAX_LENGTH]),
                                        },
                                        minLength: {
                                            value: Validation.TEXT.MIN_LENGTH,
                                            message: replaceString(Message.TEXT.MIN_LENGTH, ["Dự án", Validation.TEXT.MIN_LENGTH]),
                                        },
                                    }
                                )}
                                onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                            />
                            <div className="form-control-icon">
                                <DiAndroid />
                            </div>
                        </div>
                        {errors.project_name && (
                            <FormFeedback className="d-block">{errors.project_name.message}</FormFeedback>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4 col-xs-4">
                    <div className="form-group">
                        <label htmlFor="first-name-icon text-bold-500">
                            <h6 className="required">Ngày bắt đầu :</h6>
                        </label>
                        <div className="position-relative">
                            <input
                                type="date"
                                className="form-control"
                                {...register(
                                    "project_start_date",
                                    {
                                        required: {
                                            value: true,
                                            message: replaceString(Message.TEXT.REQUIRED, ["Ngày bắt đầu"]),
                                        },
                                    }
                                )}
                                onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                            />
                        </div>
                        {errors.project_start_date && (
                            <FormFeedback className="d-block">{errors.project_start_date.message}</FormFeedback>
                        )}
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-4">
                    <div className="form-group">
                        <label htmlFor="first-name-icon text-bold-500">
                            <h6 className="required">Ngày kết thúc :</h6>
                        </label>
                        <div className="position-relative">
                            <input
                                type="date"
                                className="form-control"
                                {...register(
                                    "project_end_date",
                                    {
                                        required: {
                                            value: true,
                                            message: replaceString(Message.TEXT.REQUIRED, ["Ngày kết thúc"]),
                                        },
                                    }
                                )}
                                onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                            />
                        </div>
                        {errors.project_end_date && (
                            <FormFeedback className="d-block">{errors.project_end_date.message}</FormFeedback>
                        )}
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
        </>
    )
}