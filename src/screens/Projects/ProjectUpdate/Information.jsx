import React from 'react';

//packet
import { useFormContext, Controller } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//Constant
import Validation from '../../../constants/validation';
import Message from '../../../constants/message';
import { replaceString } from '../../../utils/helpers';
import moment from "moment";
import DatePicker from "react-datepicker";

//icon
import { DiAndroid } from "react-icons/di";

export default function InformationComponent(props) {

    const { _onBlur, projectManagerList } = props;
    const { register, control, formState: { errors } } = useFormContext();
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
                            <Controller
                                control={control}
                                name="project_start_date"
                                render={({ field: {
                                    onChange,
                                    onBlur,
                                    value
                                } }) => (
                                    <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        className="form-control"
                                        name="project_start_date"
                                        autoComplete="off"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value ? moment(value).toDate() : value}

                                    />
                                )}
                                rules={{
                                    validate: (project_start_date) => {
                                        if (!project_start_date) {
                                            return replaceString(Message.TEXT.REQUIRED, ["Ngày bắt đầu"]);
                                        }
                                    },
                                }}
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
                            <Controller
                                control={control}
                                name="project_end_date"
                                render={({ field: {
                                    onChange,
                                    onBlur,
                                    value
                                } }) => (
                                    <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        className="form-control"
                                        name="project_end_date"
                                        autoComplete="off"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value ? moment(value).toDate() : value}

                                    />
                                )}
                                rules={{
                                    validate: (project_end_date) => {
                                        if (!project_end_date) {
                                            return replaceString(Message.TEXT.REQUIRED, ["Ngày kết thúc"]);
                                        }
                                    },
                                }}
                            />
                        </div>
                        {errors.project_end_date && (
                            <FormFeedback className="d-block">{errors.project_end_date.message}</FormFeedback>
                        )}
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-4">
                    <div className="form-group">
                        <label htmlFor="first-name-icon"><h6>Project Manager :</h6></label>
                        <div className="position-relative">
                            <select className="choices form-select"
                                {...register("project_manager")}
                            >
                                {projectManagerList.length > 0 && projectManagerList.map((item, idx) => (
                                    <option key={idx} value={item._id}>{item.fullname}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}