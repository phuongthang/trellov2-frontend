import Common from "../../constants/common";
import TypeCode from "../../constants/typeCode";

export default function InformationComponent(props) {

    const { userData } = props;
    /**
     * render template
     */
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="avatar avatar-xls me-3">
                            <img src={Common.ENV + userData.avatar} alt="" srcSet="" />
                            <span className="avatar-xl-status bg-success"></span>
                        </div>
                    </div>
                    <h5 className="mt-2 text-center">{userData.fullname}</h5>
                    <div className="text-mute text-center"><h6>{userData.email}</h6></div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item cursor-pointer"><h6>Giới thiệu:</h6></li>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h6>Email: {userData.email}</h6></li>
                        <li className="list-group-item"><h6>Phòng ban: {TypeCode.USER.ROOM_MAPPING[userData.room]}</h6></li>
                        <li className="list-group-item"><h6>Loại tài khoản: {TypeCode.USER.ROLE_MAPPING[userData.role]}</h6></li>
                        <li className="list-group-item"><h6>Chức vụ: {TypeCode.USER.POSITION_MAPPING[userData.position]}</h6></li>
                        <li className="list-group-item"><h6>Chức vụ khác: {TypeCode.USER.EXPERIENCE_MAPPING[userData.experience]}</h6></li>
                    </ul>
                </ul>
            </div>
        </>
    )
}