import React, { useState, useEffect } from "react";

//Packet
import { Modal } from "reactstrap";
import { useForm } from 'react-hook-form';

export default function ModalConfirmDeleteComponent(props) {
    /**
     * get property
     */
    const { modal, toggle, keyWord, _onCallback, id } = props;

    const [isDisable, setDisable] = useState(true);
    const { register, watch, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });

    const _onCallbackfunc = async() => {
        await _onCallback(id);
        toggle();
    }

    const watchKeyWord = watch('keyword');
    useEffect(() => {
        if(watchKeyWord === keyWord){
            setDisable(false);
        }else{
            setDisable(true);
        }
    },[watchKeyWord]);

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
                        Xác nhận xóa?
                    </h5>
                </div>
                <div className="modal-body">
                    <p>
                        Để xác nhận xóa vui lòng nhập <strong>{keyWord}</strong> để xóa !
                    </p>
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-xs-12">
                            <div className="form-group">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register(
                                            "keyword",
                                        )}
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
                    <button type="button" disabled={isDisable} onClick={_onCallbackfunc} className="btn btn-primary ml-1 btn-custom">
                        <span className="d-none d-sm-block">Xác nhận</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}