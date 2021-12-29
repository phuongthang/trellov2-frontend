import React, { useState } from "react";

//Packet
import { Modal } from "reactstrap";

export default function ModalConfirmDeleteComponent(props) {
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
            className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        Xóa Dự Án ?
                    </h5>
                </div>
                <div className="modal-body">
                    <p>
                        Để xác nhận xóa vui lòng nhập <strong>LandMark</strong> để xóa !
                    </p>
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-xs-12">
                            <div className="form-group">
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
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light-secondary btn-custom" onClick={toggle}>
                        <span className="d-none d-sm-block">Hủy</span>
                    </button>
                    <button type="button" className="btn btn-primary ml-1 btn-custom">
                        <span className="d-none d-sm-block">Xác nhận</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}