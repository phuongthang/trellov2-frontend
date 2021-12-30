//icon
import { DiAndroid } from "react-icons/di";
import { RiDeleteBin5Fill } from "react-icons/ri";


export default function ProjectCreateScreen() {
    /**
     * render template
     */
    return (
        <section id="basic-vertical-layouts">
            <div className="row match-height">
                <div className="col-md-12 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">TẠO DỰ ÁN</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <form className="form form-vertical">
                                    <div className="form-body">
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
                                                            id="first-name-icon"
                                                        />
                                                        <div className="form-control-icon">
                                                            <DiAndroid />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500">
                                                        <h6 className="required">Ngày bắt đầu :</h6>
                                                    </label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500">
                                                        <h6 className="required">Ngày kết thúc :</h6>
                                                    </label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group has-icon-left">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Chế độ :</h6></label>
                                                    <div className="position-relative">
                                                        <ul className="list-unstyled mb-0 pt-1">
                                                            <li className="d-inline-block me-5 mb-1 mt-2">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-primary"
                                                                            name="customCheck" id="customColorCheck1" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck1"><h6>Công khai</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="d-inline-block me-5 mb-1 mt-2">
                                                                <div className="form-check">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="radio"
                                                                            className="form-check-input form-check-secondary"
                                                                            name="customCheck" id="customColorCheck2" />
                                                                        <label className="form-check-label"
                                                                            htmlFor="customColorCheck2"><h6>Bảo mật</h6></label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon"><h6>Project Manager :</h6></label>
                                                    <div className="position-relative">
                                                        <select className="choices form-select">
                                                            <option value="square">Rectangle</option>
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
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Mô tả:</h6></label>
                                                    <div className="position-relative">
                                                        <textarea
                                                            type="text"
                                                            rows={5}
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="row">
                                                    <section className="category">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="card widget-todo">
                                                                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                        <h4 className="card-title d-flex">
                                                                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                            Phân loại
                                                                        </h4>
                                                                    </div>
                                                                    <div className="card-body px-0 py-1">
                                                                        <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                            <li className="widget-todo-item mt-2">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phương Công Thắng
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Nguyễn Thị Chinh
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phạm Thị Ngân
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="card widget-todo">
                                                                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                        <h4 className="card-title d-flex">
                                                                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                            Phân loại được chọn
                                                                        </h4>
                                                                    </div>
                                                                    <div className="card-body px-0 py-1">
                                                                        <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                            <li className="widget-todo-item mt-2">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phương Công Thắng
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Nguyễn Thị Chinh
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phạm Thị Ngân
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />                                                                                </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <section className="category">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="card widget-todo">
                                                                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                        <h4 className="card-title d-flex">
                                                                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                            Trạng thái
                                                                        </h4>
                                                                    </div>
                                                                    <div className="card-body px-0 py-1">
                                                                        <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                            <li className="widget-todo-item mt-2">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phương Công Thắng
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Nguyễn Thị Chinh
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <div className="checkbox checkbox-shadow">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input form-check-custom"
                                                                                                id="checkbox1"
                                                                                            />
                                                                                            <label htmlFor="checkbox1" />
                                                                                        </div>
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phạm Thị Ngân
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="card widget-todo">
                                                                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                        <h4 className="card-title d-flex">
                                                                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                            Trạng thái được chọn
                                                                        </h4>
                                                                    </div>
                                                                    <div className="card-body px-0 py-1">
                                                                        <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                            <li className="widget-todo-item mt-2">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phương Công Thắng
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Nguyễn Thị Chinh
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="widget-todo-item">
                                                                                <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                                    <div className="widget-todo-title-area d-flex align-items-center">
                                                                                        <span className="widget-todo-title px-3">
                                                                                            Phạm Thị Ngân
                                                                                        </span>
                                                                                        <RiDeleteBin5Fill />                                                                                </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <section className="tasks">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card widget-todo">
                                                            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                <h4 className="card-title d-flex">
                                                                    <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                    Thành viên
                                                                </h4>
                                                            </div>
                                                            <div className="card-body px-0 py-1">
                                                                <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                    <li className="widget-todo-item mt-2">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="checkbox checkbox-shadow">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="form-check-input form-check-custom"
                                                                                        id="checkbox1"
                                                                                    />
                                                                                    <label htmlFor="checkbox1" />
                                                                                </div>
                                                                                <div className="widget-todo-item-action d-flex align-items-center px-3">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Phương Công Thắng
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="widget-todo-item">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="checkbox checkbox-shadow">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="form-check-input form-check-custom"
                                                                                        id="checkbox1"
                                                                                    />
                                                                                    <label htmlFor="checkbox1" />
                                                                                </div>
                                                                                <div className="widget-todo-item-action d-flex align-items-center px-3">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Nguyễn Thị Chinh
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="widget-todo-item">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="checkbox checkbox-shadow">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="form-check-input form-check-custom"
                                                                                        id="checkbox1"
                                                                                    />
                                                                                    <label htmlFor="checkbox1" />
                                                                                </div>
                                                                                <div className="widget-todo-item-action d-flex align-items-center px-3">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Phạm Thị Ngân
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card widget-todo">
                                                            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                                                <h4 className="card-title d-flex">
                                                                    <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                                                    Thành viên được chọn
                                                                </h4>
                                                            </div>
                                                            <div className="card-body px-0 py-1">
                                                                <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                                                    <li className="widget-todo-item mt-2">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="widget-todo-item-action d-flex align-items-center">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Phương Công Thắng
                                                                                </span>
                                                                                <RiDeleteBin5Fill />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="widget-todo-item">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="widget-todo-item-action d-flex align-items-center">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Nguyễn Thị Chinh
                                                                                </span>
                                                                                <RiDeleteBin5Fill />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="widget-todo-item">
                                                                        <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                                            <div className="widget-todo-title-area d-flex align-items-center">
                                                                                <div className="widget-todo-item-action d-flex align-items-center">
                                                                                    <div className="avatar bg-warning">
                                                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcSet="" />
                                                                                    </div>
                                                                                </div>
                                                                                <span className="widget-todo-title px-3">
                                                                                    Phạm Thị Ngân
                                                                                </span>
                                                                                <RiDeleteBin5Fill />                                                                                </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
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