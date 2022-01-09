import { useState, useEffect } from 'react';

//Component
import UserFillterComponent from '../../Fillters/UserFillter/UserFillter';
import ModalConfirmDeleteUserComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import LinkName from './../../../constants/linkName';
import userApi from './../../../api/userApi';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import TypeCode from '../../../constants/typeCode';
import Common from '../../../constants/common';
import { getTokenFromLocalStorage } from '../../../utils/utils';

export default function UserListScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    /**
     * define state
     */

    const [modalUserFillter, setModalUserFillter] = useState(false);
    const toggleModalUserFillter = () => {
        setModalUserFillter(!modalUserFillter);
    }
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [userList, setUserList] = useState([]);

    /**
     * open/close modal confirm delete user
     */
    const [modalConfirmDeleteUser, setModalConfirmDeleteUser] = useState(false);
    const toggleModalConfirmDeleteUser = () => {
        setModalConfirmDeleteUser(!modalConfirmDeleteUser);
    }

    /**
     * on click button edit
     */
    const _onEdit = (id) => {
        localStorage.setItem('userId',id);
        navigate(LinkName.USER_UPDATE);
    }

    useEffect(() => {
        const _getListUser = () => {
            userApi.list().then(
                (response) => {
                    if (response.status === Common.HTTP_STATUS.OK) {
                        setUserList(response.data.users);
                    }
                    else {
                        setMessage(response.data.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                        toggleModalError();
                    }
                },
                (error) => {
                    if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                        navigate(LinkName.LOGIN);
                    } else {
                        setMessage(error.response.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                        toggleModalError();
                    }
                }
            );
        }
        if (token) {
            _getListUser();
        } else {
            navigate(LinkName.LOGIN);
        }
    }, [token]);

    /**
     * render template
     */
    return (
        <>
            <section className="section">
                <div className="row" id="table-striped">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <h4 className="card-title">DANH SÁCH NHÂN VIÊN</h4>
                                    <div className="">
                                        <button
                                            className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom"
                                            onClick={toggleModalUserFillter}
                                        >Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="badges px-3 pb-3">
                                    <span className="badge bg-success mr-5">Phương Công Thắng <TiDelete /></span>
                                    <span className="badge bg-success mr-5">Information Technology  <TiDelete /></span>
                                </div>
                                <div className="table-responsive px-3 pb-3">
                                    <table className="table table-striped mb-0">
                                        <thead className="text-center">
                                            <tr>
                                                <th>STT</th>
                                                <th>Nhân viên</th>
                                                <th>Loại tài khoản</th>
                                                <th>Giới tính</th>
                                                <th>Phòng ban</th>
                                                <th>Chức vụ</th>
                                                <th>Chức vụ khác</th>
                                                <th>Hình thức làm việc</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {
                                                userList.length > 0 && userList.map((user, idx) => (
                                                    <tr key={user._id}>
                                                        <td className="text-bold-500">#{idx + 1}</td>
                                                        <td className="text-bold-500">
                                                            <div className='td-name'>
                                                                <div className="avatar me-3">
                                                                    <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                                                </div>
                                                                {user.fullname ? user.fullname : ''}
                                                            </div>
                                                        </td>
                                                        <td>{TypeCode.USER.ROLE_MAPPING[user.role]}</td>
                                                        <td>{TypeCode.USER.GENDER_MAPPING[user.gender]}</td>
                                                        <td>{TypeCode.USER.ROOM_MAPPING[user.room]}</td>
                                                        <td>{TypeCode.USER.POSITION_MAPPING[user.position]}</td>
                                                        <td>{TypeCode.USER.EXPERIENCE_MAPPING[user.experience]}</td>
                                                        <td>{TypeCode.USER.WORKFORM_MAPPING[user.workform]}</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <span className='px-1 cursor-pointer' onClick={()=>_onEdit(user._id)}><MdEdit /></span>
                                                                <span className='px-1 cursor-pointer'><RiDeleteBin5Fill onClick={toggleModalConfirmDeleteUser} /></span>
                                                                <span className='px-1 cursor-pointer'><BsPinAngleFill /></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                modalUserFillter &&
                <UserFillterComponent
                    modal={modalUserFillter}
                    toggle={toggleModalUserFillter}
                />
            }
            {
                modalConfirmDeleteUser &&
                <ModalConfirmDeleteUserComponent
                    modal={modalConfirmDeleteUser}
                    toggle={toggleModalConfirmDeleteUser}
                />
            }
            {
                modalError &&
                <ModalErrorComponent
                    modal={modalError}
                    toggle={toggleModalError}
                    message={message}
                />
            }
        </>
    )
}