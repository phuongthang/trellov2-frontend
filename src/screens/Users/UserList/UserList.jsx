import { useState } from 'react';

//Component
import UserFillterComponent from '../../Fillters/UserFillter/UserFillter';
import ModalConfirmDeleteUserComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export default function UserListScreen() {
    /**
     * define state
     */

    const [modalUserFillter, setModalUserFillter] = useState(false);
    const toggleModalUserFillter = () => {
        setModalUserFillter(!modalUserFillter);
    }

    /**
     * open/close modal confirm delete user
     */
    const [modalConfirmDeleteUser, setModalConfirmDeleteUser] = useState(false);
    const toggleModalConfirmDeleteUser = () => {
        setModalConfirmDeleteUser(!modalConfirmDeleteUser);
    }

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
                                                <th>Giới tính</th>
                                                <th>Phòng ban</th>
                                                <th>Hình thức làm việc</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td className="text-bold-500">1</td>
                                                <td className="text-bold-500">
                                                    <div className="avatar me-3">
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>Nam</td>
                                                <td>Information Technology</td>
                                                <td>Parttime</td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <span className='px-1'><MdEdit /></span>
                                                        <span className='px-1'><RiDeleteBin5Fill onClick={toggleModalConfirmDeleteUser} /></span>
                                                        <span className='px-1'><BsPinAngleFill /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-bold-500">1</td>
                                                <td className="text-bold-500">
                                                    <div className="avatar me-3">
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>Nam</td>
                                                <td>Information Technology</td>
                                                <td>Parttime</td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <span className='px-1'><MdEdit /></span>
                                                        <span className='px-1'><RiDeleteBin5Fill onClick={toggleModalConfirmDeleteUser} /></span>
                                                        <span className='px-1'><BsPinAngleFill /></span>
                                                    </div>
                                                </td>
                                            </tr>
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
        </>
    )
}