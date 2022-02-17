import { useState, useEffect } from 'react';

//Component
import UserFillterComponent from '../../Fillters/UserFillter/UserFillter';
import ModalConfirmDeleteUserComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';
import ModalConfirmResetPasswordComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { ImBackward2, ImForward3 } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";

//packet
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

//constant
import LinkName from './../../../constants/linkName';
import TypeCode from '../../../constants/typeCode';
import Common from '../../../constants/common';

//api
import userApi from './../../../api/userApi';

//utils
import { getTokenFromLocalStorage } from '../../../utils/utils';
import { isEmpty } from 'underscore';
import authApi from './../../../api/authApi';


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

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const [userList, setUserList] = useState([]);
    const [userOriginList, setUserOriginList] = useState([]);
    const [keyWord, setKeyWord] = useState();
    const [userId, setUserId] = useState();
    const [parameterQuery, setParameterQuery] = useState({});

    const [pageLimit] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);

    /**
     * 
     * @param {*} id 
     * click button delete
     */
    const _onDelete = (id) => {
        userApi.delete(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Xóa tài khoản nhân viên thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Xóa tài khoản nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Xóa tài khoản nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * open/close modal confirm delete user
     */
    const [modalConfirmDeleteUser, setModalConfirmDeleteUser] = useState(false);
    const toggleModalConfirmDeleteUser = (id, keyWord) => {
        setUserId(id);
        setKeyWord(keyWord);
        setModalConfirmDeleteUser(!modalConfirmDeleteUser);
    }

    /**
     * open/close modal confirm delete user
     */
    const [modalConfirmResetPassword, setModalConfirmResetPassword] = useState(false);
    const toggleModalConfirmResetPassword = (id, keyWord) => {
        setUserId(id);
        setKeyWord(keyWord);
        setModalConfirmResetPassword(!modalConfirmResetPassword);
    }

    /**
     * 
     * @param {*} get list user
     */

    const _getListUser = () => {
        userApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setUserOriginList(response.data.users);
                    setUserList(response.data.users.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.users.length / pageLimit));
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
                    setMessage(error.response?.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }
    /**
     * on click button edit
     */
    const _onEdit = (id) => {
        navigate(LinkName.USER_UPDATE, { state: { userId: id } });
    }

    /**
     * reset default password
     */
    const _onResetPassword = (id) => {
        authApi.reset(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Thiết lập lại mật khẩu thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Thiết lập lại mật khẩu thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Thiết lập lại mật khẩu thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }


    /**
     * on page change
     * @param {*} 
     */
    const _onPageChange = (e) => {
        const selectedPage = e.selected;
        setPageCurrent(selectedPage + 1);
    }

    /**
     * 
     * @param {*} data 
     * click button search
     */
    const _onSearch = (data) => {
        userApi.search(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setUserOriginList(response.data.users);
                    setUserList(response.data.users.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.users.length / pageLimit));
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
                    setMessage(error.response?.message || 'Lấy danh nhân viên thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * click button reset
     */
    const _onReset = () => {
        _getListUser();
        setParameterQuery({});
    }

    /**
     * click button delete search
     */
    const _onDeleteFillter = (name) => {
        if (parameterQuery[name] || parameterQuery[name] === 0) {
            delete parameterQuery[name];
        }
        _onSearch(parameterQuery);
    }

    useEffect(() => {
        setUserList(userOriginList.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
    }, [pageCurrent]);

    useEffect(() => {
        if (token) {
            _getListUser();
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
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
                                        <button
                                            className="btn btn-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                            onClick={_onReset}
                                        >Đặt lại
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="badges px-3 pb-3">
                                    {isEmpty(parameterQuery) ?
                                        <span className="badge bg-success mr-5">Tất cả</span> :
                                        <>
                                            <> {parameterQuery.fullname && <span className="badge bg-success mr-5">Họ và tên : {parameterQuery.fullname} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('fullname')} /></span>} </>
                                            <> {(parameterQuery.role || parameterQuery.role === TypeCode.USER.ROLE.STAFF) && <span className="badge bg-success mr-5">Loại tài khoản: {TypeCode.USER.ROLE_MAPPING[parameterQuery.role]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('role')} /></span>}</>
                                            <>{(parameterQuery.room || parameterQuery.room === TypeCode.USER.ROOM.OTHER) && <span className="badge bg-success mr-5">Phòng ban: {TypeCode.USER.ROOM_MAPPING[parameterQuery.room]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('room')} /></span>}</>
                                            <>{(parameterQuery.position || parameterQuery.position === TypeCode.USER.POSITION.OTHER) && <span className="badge bg-success mr-5">Chức vụ: {TypeCode.USER.POSITION_MAPPING[parameterQuery.position]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('position')} /></span>}</>
                                            <>{(parameterQuery.experience || parameterQuery.experience === TypeCode.USER.EXPERIENCE.OTHER) && <span className="badge bg-success mr-5">Chức vụ khác: {TypeCode.USER.EXPERIENCE_MAPPING[parameterQuery.experience]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('experience')} /></span>}</>
                                            <>{(parameterQuery.gender || parameterQuery.gender === TypeCode.USER.GENDER.OTHER) && <span className="badge bg-success mr-5">Giới tính: {TypeCode.USER.GENDER_MAPPING[parameterQuery.gender]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('gender')} /></span>}</>
                                            <>{(parameterQuery.workform || parameterQuery.workform === TypeCode.USER.WORKFORM.OTHER) && <span className="badge bg-success mr-5">Hình thức làm việc: {TypeCode.USER.WORKFORM_MAPPING[parameterQuery.workform]} <TiDelete className="cursor-pointer" onClick={() => _onDeleteFillter('workform')} /></span>}</>
                                        </>
                                    }

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
                                                            <div>
                                                                <div className="avatar me-3">
                                                                    <img src={Common.ENV + user.avatar} alt="" srcSet="" />
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
                                                                <span className='px-1 cursor-pointer' onClick={() => _onEdit(user._id)}><MdEdit /></span>
                                                                <span className='px-1 cursor-pointer'><RiDeleteBin5Fill onClick={() => toggleModalConfirmDeleteUser(user._id, user.fullname)} /></span>
                                                                <span className='px-1 cursor-pointer' onClick={() => toggleModalConfirmResetPassword(user._id, user.fullname)}><GrUpdate /></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {pageCount > 1 && <div className="d-flex justify-content-center">
                                <ReactPaginate
                                    previousLabel={<ImBackward2 />}
                                    nextLabel={<ImForward3 />}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={pageCount}
                                    onPageChange={_onPageChange}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
            {
                modalUserFillter &&
                <UserFillterComponent
                    modal={modalUserFillter}
                    toggle={toggleModalUserFillter}
                    _onSearch={_onSearch}
                    parameterQuery={parameterQuery}
                    setParameterQuery={setParameterQuery}
                    userList={userList}
                />
            }
            {
                modalConfirmDeleteUser &&
                <ModalConfirmDeleteUserComponent
                    modal={modalConfirmDeleteUser}
                    toggle={toggleModalConfirmDeleteUser}
                    keyWord={keyWord}
                    _onCallback={_onDelete}
                    id={userId}
                />
            }

            {
                modalConfirmResetPassword &&
                <ModalConfirmResetPasswordComponent
                    modal={modalConfirmResetPassword}
                    toggle={toggleModalConfirmResetPassword}
                    keyWord={keyWord}
                    _onCallback={_onResetPassword}
                    id={userId}
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
            {
                modalSuccess &&
                <ModalSuccessComponent
                    modal={modalSuccess}
                    toggle={toggleModalSuccess}
                    message={message}
                />
            }
        </>
    )
}