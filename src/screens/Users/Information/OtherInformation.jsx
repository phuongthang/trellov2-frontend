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

export default function OtherInformationComponent(props) {

    const { register, formState: { errors } } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Phòng ban :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Square</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="rombo">Rombo</option>
                            <option value="romboid">Romboid</option>
                            <option value="trapeze">Trapeze</option>
                            <option value="traible">Triangle</option>
                            <option value="polygon">Polygon</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Fontend Developer</option>
                            <option value="rectangle">Backend Developer</option>
                            <option value="rombo">Fullstack Developer</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ khác :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select">
                            <option value="square">Project Manager</option>
                            <option value="rectangle">Leader</option>
                            <option value="rombo">Staff</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}