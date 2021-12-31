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

export default function AddressComponent(props) {

    const { _onBlur } = props;
    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Thành phố :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Part time</option>
                            <option value="rectangle">Full time</option>
                            <option value="rombo">Remote</option>
                            <option value="romboid">Support</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Quận/Huyện :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Part time</option>
                            <option value="rectangle">Full time</option>
                            <option value="rombo">Remote</option>
                            <option value="romboid">Support</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Thị trấn/Xã :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Part time</option>
                            <option value="rectangle">Full time</option>
                            <option value="rombo">Remote</option>
                            <option value="romboid">Support</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}