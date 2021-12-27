import React, { useState } from "react";

//Packet
import { Modal } from "reactstrap";

export default function TaskFillterComponent(props) {
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
                                <h4 className="card-title">TÌM KIẾM CÔNG VIỆC</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6>Dự án :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Dự án" />
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>ID :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="ID" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Tiêu đề :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Tiêu đề" />
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6>Phân loại :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Phân loại" />
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Trạng thái :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Trạng thái" />
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Mức độ ưu tiên :</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Phân loại" />
                                                </div>
                                                <div className="col-sm-3">
                                                    <h6>Phân công:</h6>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Trạng thái" />
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-3">
                                                <div className="col-sm-6">
                                                    <h6>Ngày bắt đầu :</h6>
                                                    <input className="form-control form-control-sm" type="date"
                                                        placeholder="Small Input" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <h6>Ngày kết thúc :</h6>
                                                    <input className="form-control form-control-sm" type="date"
                                                        placeholder="Small Input" />
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