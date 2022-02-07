import React from "react";

//lottie
import Lottie from 'react-lottie';
import success from '../../../assets/lottie/success.json';

//Packet
import { Modal } from "reactstrap";

export default function ModalSuccessComponent(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: success,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const _onClick = () => {
        window.location.reload();
    }
    /**
     * get property
     */
    const { modal, message } = props;

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
                        Thông báo
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="mb-2">
                        <Lottie options={defaultOptions}
                            height={160}
                            width={160} />
                    </div>
                    <h6 className="text-center pt-3">{message}</h6>
                </div>
                <div className="modal-footer">
                    <button onClick={_onClick} type="button" className="btn btn-primary ml-1 btn-custom">
                        <span className="d-none d-sm-block">Xác nhận</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}