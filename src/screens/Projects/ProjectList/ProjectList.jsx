import { useEffect, useState } from 'react';

//Component
import ProjectUpdateScreen from './../ProjectUpdate/ProjectUpdate';
import ModalConfirmDeleteProjectComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import projectApi from '../../../api/projectApi';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../../utils/utils';
import Common from '../../../constants/common';
import LinkName from '../../../constants/linkName';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import TypeCode from '../../../constants/typeCode';

export default function ProjectListScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();
    /**
     * open/close modal project update
     */
    const [modalProjectUpdate, setModalProjectUpdate] = useState(false);
    const toggleModalProjectUpdate = () => {
        setModalProjectUpdate(!modalProjectUpdate);
    }

    /**
     * open/close modal confirm delete project
     */
    const [modalConfirmDeleteProject, setModalConfirmDeleteProject] = useState(false);
    const toggleModalConfirmDeleteProject = () => {
        setModalConfirmDeleteProject(!modalConfirmDeleteProject);
    }
    const [projectList, setProjectList] = useState([]);
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    /**
     * 
     * @param {*} get list project
     */

    const _getProjectList = () => {
        projectApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectList(response.data.projects);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    useEffect(() => {
        if (token) {
            _getProjectList();
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
                                <h4 className="card-title">DANH SÁCH DỰ ÁN</h4>
                            </div>
                            <div className="row px-3 pb-3">
                                <div className="col-sm-3">
                                    <h6>Trạng thái :</h6>
                                    <div className="position-relative">
                                        <select className="choices form-select">
                                            <option value="square">Rectangle</option>
                                            <option value="rectangle">Rectangle</option>
                                            <option value="rombo">Rombo</option>
                                            <option value="romboid">Romboid</option>
                                            <option value="trapeze">Trapeze</option>
                                            <option value="traible">Triangle</option>
                                            <option value="polygon">Polygon</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="table-responsive px-3 pb-3">
                                    <table className="table table-striped mb-0">
                                        <thead className="text-center">
                                            <tr>
                                                <th>STT</th>
                                                <th>Dự án</th>
                                                <th>Quản lý dự án</th>
                                                <th>Chế độ</th>
                                                <th>Thành viên</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {
                                                projectList.length > 0 && projectList.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td className="text-bold-500">{idx + 1}</td>
                                                        <td>{item.project_name}</td>
                                                        <td className="text-bold-500">
                                                            <div className="avatar me-3">
                                                                <img src={Common.ENV + item.project_manager.avatar} alt="" srcSet="" />
                                                            </div>
                                                            {item.project_manager.fullname}
                                                        </td>
                                                        <td>
                                                            {TypeCode.PROJECT.MODE_MAPPING[item.mode]}
                                                        </td>
                                                        <td>
                                                            <ul className="list-unstyled order-list m-b-0">
                                                                {
                                                                    item.members.length > 0 && (
                                                                        <>
                                                                        {item.members[0] && <li className="team-member team-member-sm"><img className="rounded-circle" src={Common.ENV + item.members[0].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[0].fullname} /></li>}
                                                                        {item.members[1] && <li className="team-member team-member-sm"><img className="rounded-circle" src={Common.ENV + item.members[1].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[1].fullname} /></li>}
                                                                        {item.members[2] && <li className="team-member team-member-sm"><img className="rounded-circle" src={Common.ENV + item.members[2].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[2].fullname} /></li>}
                                                                        </>
                                                                    )
                                                                }
                                                                {
                                                                    item.members.length - 3 > 0 && <li className="avatars avatars-sm"><span className="badge badge-primary">{item.members.length - 3}</span></li>
                                                                }
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <span className='px-1'><MdEdit onClick={toggleModalProjectUpdate} /></span>
                                                                <span className='px-1'><RiDeleteBin5Fill onClick={toggleModalConfirmDeleteProject} /></span>
                                                                <span className='px-1'><BsPinAngleFill /></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                projectList.length <= 0 && (
                                                    <div className="text-center mt-5">
                                                        <h6>Không có dự án nào !</h6>
                                                    </div>
                                                )

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
                modalProjectUpdate &&
                <ProjectUpdateScreen
                    modal={modalProjectUpdate}
                    toggle={toggleModalProjectUpdate}
                />
            }
            {
                modalConfirmDeleteProject &&
                <ModalConfirmDeleteProjectComponent
                    modal={modalConfirmDeleteProject}
                    toggle={toggleModalConfirmDeleteProject}
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