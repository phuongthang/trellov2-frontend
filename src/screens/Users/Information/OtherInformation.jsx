import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';

//Constant
import TypeCode from './../../../constants/typeCode';

export default function OtherInformationComponent(props) {

    const { _disabled } = props;
    const { register } = useFormContext();
    /**
     * render template
     */
    return (
        <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Phòng ban :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select"
                            disabled={_disabled}
                            {...register("room")}
                        >
                            <option value={TypeCode.USER.ROOM.OUTSOURCE}>{TypeCode.USER.ROOM_MAPPING[TypeCode.USER.ROOM.OUTSOURCE]}</option>
                            <option value={TypeCode.USER.ROOM.PRODUCT}>{TypeCode.USER.ROOM_MAPPING[TypeCode.USER.ROOM.PRODUCT]}</option>
                            <option value={TypeCode.USER.ROOM.OTHER}>{TypeCode.USER.ROOM_MAPPING[TypeCode.USER.ROOM.OTHER]}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select"
                            disabled={_disabled}
                            {...register("position")}
                        >
                            <option value={TypeCode.USER.POSITION.DEVELOPER}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.DEVELOPER]}</option>
                            <option value={TypeCode.USER.POSITION.TESTER}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.TESTER]}</option>
                            <option value={TypeCode.USER.POSITION.COMTOR}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.COMTOR]}</option>
                            <option value={TypeCode.USER.POSITION.BUSINESS_ANALYST}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.BUSINESS_ANALYST]}</option>
                            <option value={TypeCode.USER.POSITION.DESIGNER}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.DESIGNER]}</option>
                            <option value={TypeCode.USER.POSITION.OTHER}>{TypeCode.USER.POSITION_MAPPING[TypeCode.USER.POSITION.OTHER]}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ khác :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select"
                            disabled={_disabled}
                            {...register("experience")}
                        >
                            <option value={TypeCode.USER.EXPERIENCE.STAFF}>{TypeCode.USER.EXPERIENCE_MAPPING[TypeCode.USER.EXPERIENCE.STAFF]}</option>
                            <option value={TypeCode.USER.EXPERIENCE.LEADER}>{TypeCode.USER.EXPERIENCE_MAPPING[TypeCode.USER.EXPERIENCE.LEADER]}</option>
                            <option value={TypeCode.USER.EXPERIENCE.PROJECT_MANAGER}>{TypeCode.USER.EXPERIENCE_MAPPING[TypeCode.USER.EXPERIENCE.PROJECT_MANAGER]}</option>
                            <option value={TypeCode.USER.EXPERIENCE.OTHER}>{TypeCode.USER.EXPERIENCE_MAPPING[TypeCode.USER.EXPERIENCE.OTHER]}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}