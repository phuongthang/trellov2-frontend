//icon
import { RiUser2Fill } from "react-icons/ri";
import { MdEmail, MdModeEditOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useState } from "react";


export default function UserInformationScreen() {

    /**
     * define state
     */
    const [avatarSrc, setAvatarSrc] = useState();
    const [subAvatarSrc, setSubAvatarSrc] = useState();

    /**
     * preview image
     * @param {*} setState 
     */
    const _onClick = (setState) => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            let files =   Array.from(input.files);
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function (e) {
                setState(reader.result);
            }
        }
        input.click();
    }
    /**
     * render template
     */
    return (
        <section id="basic-vertical-layouts">
            <div className="row match-height">
                <div className="col-md-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">THÔNG TIN CÁ NHÂN</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <form className="form form-vertical">
                                    <div className="form-body">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Ảnh đại diện:</h6></label>
                                                    <div className="position-relative">
                                                        <div className="d-flex justify-content-center mt-3">
                                                            <div className="avatar avatar-xxl me-3">
                                                                <img src={avatarSrc ? avatarSrc : "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1"} alt="" srcSet="" />
                                                                <span className="avatar-xxl-status bg-warning cursor-pointer" onClick={()=>_onClick(setAvatarSrc)}><MdModeEditOutline /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Ảnh chấm công:</h6></label>
                                                    <div className="position-relative">
                                                        <div className="d-flex justify-content-center mt-3">
                                                            <div className="avatar avatar-xxl me-3">
                                                                <img src={subAvatarSrc ? subAvatarSrc : "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1"} alt="" srcSet="" />
                                                                <span className="avatar-xxl-status bg-warning cursor-pointer" onClick={()=>_onClick(setSubAvatarSrc)}><MdModeEditOutline /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-xl-4 col-md-4 col-xs-4">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500">
                                                        <h6 className="required">Họ và tên:</h6>
                                                    </label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <RiUser2Fill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-4">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500">
                                                        <h6 className="required">Chấm công :</h6>
                                                    </label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <RiUser2Fill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-4">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Loại tài khoản :</h6></label>
                                                    <div className="position-relative">
                                                        <ul className="list-unstyled mb-0 pt-1">
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-primary"
                                                                            name="customCheck" id="customColorCheck1" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck1"><h6>Administrator</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-secondary"
                                                                            name="customCheck" id="customColorCheck2" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck2"><h6>Staff</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500">
                                                        <h6 className="required">Email :</h6>
                                                    </label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <MdEmail />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Email cá nhân :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <MdEmail />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Số điện thoại :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <FaPhone />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                                            name="customCheck" id="customColorCheck1" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck1"><h6>Nam</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-secondary"
                                                                            name="customCheck" id="customColorCheck2" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck2"><h6>Nữ</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-success"
                                                                            name="customCheck" id="customColorCheck3" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck3"><h6>Khác</h6></label>
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
                                                                            name="customCheck" id="customColorCheck1" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck1"><h6>Fulltime</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-secondary"
                                                                            name="customCheck" id="customColorCheck2" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck2"><h6>Parttime</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-success"
                                                                            name="customCheck" id="customColorCheck3" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck3"><h6>Khác</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-4">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon"><h6>Ngày sinh :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Địa chỉ thường trú :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Số chứng minh thư :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Ngày cấp :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Nơi cấp :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Tài khoản ngân hàng :</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <BsFillCreditCardFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                <button type="button" className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom">Hủy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}