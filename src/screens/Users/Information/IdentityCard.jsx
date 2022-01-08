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

export default function IdentityCardComponent(props) {

    const { _onBlur } = props;
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
                            {...register(
                                "card",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.REQUIRE, ["Số chứng minh thư"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.card && (
                        <FormFeedback className="d-block">{errors.card.message}</FormFeedback>
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
                            {...register(
                                "card_date",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.REQUIRE, ["Ngày cấp"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.card_date && (
                        <FormFeedback className="d-block">{errors.card_date.message}</FormFeedback>
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
                            {...register(
                                "card_address",
                                {
                                    required: {
                                        value: true,
                                        message: replaceString(Message.REQUIRE, ["Nơi cấp"]),
                                    }
                                }
                            )}
                            onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                        />
                    </div>
                    {errors.card_address && (
                        <FormFeedback className="d-block">{errors.card_address.message}</FormFeedback>
                    )}
                </div>
            </div>
        </div>
    )
}