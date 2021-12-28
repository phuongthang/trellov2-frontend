import React, { useState } from "react";

//icon
import { DiAndroid } from "react-icons/di";

//Packet
import { Modal } from "reactstrap";

export default function TaskUpdateScreen(props) {
    /**
     * get property
     */
    const { modal, toggle } = props;

    /**
     * render template
     */
    return (
        <Modal
            isOpen={modal}
            className="modal-task-update">
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">CHỈNH SỬA CÔNG VIỆC</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">
                                                            <h6>Dự án:</h6>
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
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">
                                                            <h6>Phân loại:</h6>
                                                        </label>
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
                                                        <label htmlFor="first-name-icon text-bold-500">
                                                            <h6 className="required">Tiêu đề:</h6>
                                                        </label>
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
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon text-bold-500">
                                                            <h6 className="required">Mô tả:</h6>
                                                        </label>
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
                                            <hr />
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon"><h6>Trạng thái :</h6></label>
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
                                                                <label htmlFor="first-name-icon"><h6>Độ ưu tiên :</h6></label>
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
                                                                <label htmlFor="first-name-icon"><h6>Phân công cho :</h6></label>
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
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon"><h6>Công việc cha :</h6></label>
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
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500"><h6>Ngày bắt đầu :</h6></label>
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
                                                                <label htmlFor="first-name-icon text-bold-500"><h6>Ngày kết thúc :</h6></label>
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
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500"><h6>Thời gian :</h6></label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="first-name-icon"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500"><h6>Ngày kết thúc :</h6></label>
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
            <hr />
            <hr />
            <section className="section">
                <div className="row" id="table-striped">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">LỊCH SỬ HOẠT ĐỘNG</h4>
                            </div>
                            <div className="card-content px-3 pb-3">
                                <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <hr />
            <section className="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">GHI CHÚ</h5>
                                    </div>
                                </div>
                                <form className="form form-vertical px-5">
                                    <div className="form-body">
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
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>File tải lên:</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                                    onClick={toggle}
                                                >Hủy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    );
}