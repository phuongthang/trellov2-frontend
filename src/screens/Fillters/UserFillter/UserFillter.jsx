import React, { useState } from "react";

//Packet
import { Modal } from "reactstrap";

export default function UserFillterComponent(props) {
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
            className="modal-task-fillter">
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">TÌM KIẾM NHÂN VIÊN</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-6">
                                                    <h6>Nhân viên :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Nhân viên" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Phòng ban :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Phòng ban" />
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-3">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Giới tính :</h6></label>
                                                        <div className="position-relative">
                                                            <ul className="list-unstyled mb-0">
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
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500"><h6>Hình thức làm việc :</h6></label>
                                                        <div className="position-relative">
                                                            <ul className="list-unstyled mb-0">
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
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Tìm kiếm</button>
                                                <button
                                                    type="button"
                                                    className="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                                    onClick={toggle}
                                                >Hủy</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Modal >
    );
}