import { useState, useEffect } from 'react';

//icon
import { RiSendPlaneFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";

//packet
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import { isEmpty } from 'underscore';

//constant
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../utils/utils";
import LinkName from "../../constants/linkName";
import Common from "../../constants/common";
import Message from './../../constants/message';
import { replaceString } from './../../utils/helpers';

//component
import ModalErrorComponent from "../../components/Modal/ModalError/ModalError";
import ModalSuccessComponent from "../../components/Modal/ModalSuccess/ModalSuccess";

//api
import noteApi from './../../api/noteApi';


export default function NoteScreen() {

    const token = getTokenFromLocalStorage();
    let navigate = useNavigate();
    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, getValues, setValue, formState: { errors } } = methods;

    /**
     * define state
     */
    const [userData, setUserData] = useState({});
    const [noteList, setNoteList] = useState([]);

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    /**
    * trim string
    * @param {*} name 
    * @param {*} value 
    */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    const _getNoteList = (id) => {
        noteApi.list(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setNoteList(response.data.notes);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onSubmit = () => {
        const data = {
            message: getValues('message'),
            owner: userData._id,
        }

        noteApi.create(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Đăng kí ghi chú thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Đăng kí ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Đăng kí ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * 
     * @param {*} id 
     * click button delete
     */
     const _onDelete = (id) => {
        noteApi.delete(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Xóa ghi chú thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Xóa ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Xóa ghi chú thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * get infor user from token
     */
    useEffect(() => {
        if (token) {
            setUserData(getUserDataFromLocalStorage);
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        if (!isEmpty(userData)) {
            _getNoteList(userData._id);
        }
        // eslint-disable-next-line
    }, [userData]);

    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="media d-flex align-items-center">
                                <div className="avatar me-3">
                                    <img src={Common.ENV + userData.avatar} alt="" srcSet="" />
                                    <span className="avatar-status bg-success" />
                                </div>
                                <div className="name flex-grow-1">
                                    <h6 className="mb-0">{userData.fullname}</h6>
                                    <span className="text-xs">{userData.email}</span>
                                </div>
                                <button className="btn btn-sm">
                                    <i data-feather="x" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body pt-4 bg-grey">
                            <div className="chat-content">
                                {
                                    noteList.length > 0 && noteList.map((item, idx) => (
                                        <div className="chat chat-left" key={idx}>
                                            <div className="chat-body">
                                                <div className="chat-message pre-line">
                                                    {item.message}
                                                    <span className="px-1"><TiDelete onClick={()=>_onDelete(item._id)} style={{width:'25px', height: '25px'}}  className="cursor-pointer"/></span>
                                                </div>
                                                    
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="message-form d-flex flex-direction-column align-items-center">
                                <div className="d-flex flex-grow-1 ml-4">
                                    <textarea
                                        type="text"
                                        rows={4}
                                        className="form-control"
                                        {...register(
                                            "message",
                                            {
                                                required: {
                                                    value: true,
                                                    message: replaceString(Message.TEXT.REQUIRED, ["Ghi chú"]),
                                                },
                                            }
                                        )}
                                        onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                                    />
                                </div>
                                <RiSendPlaneFill onClick={_onSubmit} className='mx-2' style={{ fontSize: '36px', cursor: 'pointer' }} />
                            </div>
                            {errors.message && (
                                <FormFeedback className="d-block">{errors.message.message}</FormFeedback>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {
                modalError &&
                <ModalErrorComponent
                    modal={modalError}
                    toggle={toggleModalError}
                    message={message}
                />
            }

            {
                modalSuccess &&
                <ModalSuccessComponent
                    modal={modalSuccess}
                    toggle={toggleModalSuccess}
                    message={message}
                />
            }
        </section>
    );
}