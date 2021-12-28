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
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Xóa Dự Án ?
                    </h5>
                </div>
                <div class="modal-body">
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-light-secondary btn-custom" onClick={toggle}>
                        <span class="d-none d-sm-block">Hủy</span>
                    </button>
                    <button type="button" class="btn btn-primary ml-1 btn-custom">
                        <span class="d-none d-sm-block">Xác nhận</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}