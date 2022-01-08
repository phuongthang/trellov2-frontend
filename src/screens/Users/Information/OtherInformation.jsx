import React from 'react';

//packet
import { useFormContext } from 'react-hook-form';

//Constant
import TypeCode from './../../../constants/typeCode';

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
                        <select className="choices form-select"
                            {...register("zoom")}
                        >
                            <option value={TypeCode.USER.ZOOM.OUTSOURCE}>{TypeCode.USER.ZOOM_MAPPING[TypeCode.USER.ZOOM.OUTSOURCE]}</option>
                            <option value={TypeCode.USER.ZOOM.PRODUCT}>{TypeCode.USER.ZOOM_MAPPING[TypeCode.USER.ZOOM.PRODUCT]}</option>
                            <option value={TypeCode.USER.ZOOM.OTHER}>{TypeCode.USER.ZOOM_MAPPING[TypeCode.USER.ZOOM.OTHER]}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select"
                            {...register("position")}
                        >
                            <option value={TypeCode.USER.POSTION.DEVELOPER}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.DEVELOPER]}</option>
                            <option value={TypeCode.USER.POSTION.TESTER}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.TESTER]}</option>
                            <option value={TypeCode.USER.POSTION.COMTOR}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.COMTOR]}</option>
                            <option value={TypeCode.USER.POSTION.BUSINESS_ANALYST}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.BUSINESS_ANALYST]}</option>
                            <option value={TypeCode.USER.POSTION.DESIGNER}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.DESIGNER]}</option>
                            <option value={TypeCode.USER.POSTION.OTHER}>{TypeCode.USER.POSTION_MAPPING[TypeCode.USER.POSTION.OTHER]}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-4 col-xs-6">
                <div className="form-group has-icon-left">
                    <label htmlFor="first-name-icon text-bold-500"><h6>Chức vụ khác :</h6></label>
                    <div className="position-relative">
                        <select className="choices form-select"
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