import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

//Constant
import Message from '../../../constants/message';
import { replaceString } from '../../../utils/helpers';

export default function IdentityCardComponent(props) {

    const { _onBlur, _disabled } = props;
    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group">
                    <label htmlFor="first-name-icon text-bold-500"><h6 className="required">Số chứng minh thư :</h6></label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            disabled = {_disabled}
                            {...register(
                                "identity_card",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.TEXT.REQUIRED, ["Số chứng minh thư"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.identity_card && (
                        <FormFeedback className="d-block">{errors.identity_card.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group">
                    <label htmlFor="first-name-icon text-bold-500"><h6 className="required">Ngày cấp :</h6></label>
                    <div className="position-relative">
                        <input
                            type="date"
                            className="form-control"
                            disabled = {_disabled}
                            {...register(
                                "identity_date",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.TEXT.REQUIRED, ["Ngày cấp"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.identity_date && (
                        <FormFeedback className="d-block">{errors.identity_date.message}</FormFeedback>
                    )}
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group">
                    <label htmlFor="first-name-icon text-bold-500"><h6 className="required">Nơi cấp :</h6></label>
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control"
                            disabled = {_disabled}
                            {...register(
                                "identity_place",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.TEXT.REQUIRED, ["Nơi cấp"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.identity_place && (
                        <FormFeedback className="d-block">{errors.identity_place.message}</FormFeedback>
                    )}
                </div>
            </div>
        </div>
    )
}