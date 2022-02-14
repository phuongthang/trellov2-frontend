import { useEffect, useState } from 'react';

//Component
import ProjectUpdateScreen from './../ProjectUpdate/ProjectUpdate';
import ModalConfirmDeleteProjectComponent from '../../../components/Modal/ModalConfirmDelete/ModalConfirmDelete';
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ModalSuccessComponent from '../../../components/Modal/ModalSuccess/ModalSuccess';
import ReactPaginate from 'react-paginate';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ImBackward2, ImForward3 } from "react-icons/im";

//api
import projectApi from '../../../api/projectApi';

//packet
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { filterProjectList, formatDate } from '../../../utils/helpers';

//constants
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from '../../../utils/utils';
import Common from '../../../constants/common';
import LinkName from '../../../constants/linkName';
import TypeCode from '../../../constants/typeCode';

export default function ProjectListScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, watch, getValues } = methods;
    /**
     * open/close modal project update
     */
    const [modalProjectUpdate, setModalProjectUpdate] = useState(false);
    const toggleModalProjectUpdate = (id) => {
        setProjectId(id);
        setModalProjectUpdate(!modalProjectUpdate);
    }

    /**
     * open/close modal confirm delete project
     */
    const [modalConfirmDeleteProject, setModalConfirmDeleteProject] = useState(false);
    const toggleModalConfirmDeleteProject = (id, keyWord) => {
        setProjectId(id);
        setKeyWord(keyWord);
        setModalConfirmDeleteProject(!modalConfirmDeleteProject);
    }
    const [projectList, setProjectList] = useState([]);
    const [projectOriginList, setProjectOriginList] = useState([]);
    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');
    const [keyWord, setKeyWord] = useState();
    const [projectId, setProjectId] = useState();

    const [modalSuccess, setModalSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalSuccess(!modalSuccess);
    }
    const watchProjectStatus = watch('project_status');

    const [pageLimit] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [userData, setUserData] = useState({});

    /**
     * 
     * @param {*} id 
     * click button delete
     */
    const _onDelete = (id) => {
        projectApi.delete(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setMessage(response.data.message || 'Xóa dự án thành công !');
                    toggleModalSuccess();
                }
                else {
                    setMessage(response.data.message || 'Xóa dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Xóa dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    /**
     * 
     * @param {*} get list project
     */

    const _getProjectList = () => {
        projectApi.list().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectOriginList(response.data.projects);
                    setProjectList(filterProjectList(response.data.projects, userData._id).slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.projects.length / pageLimit));
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

    const _onSearch = (data) => {
        projectApi.search(data).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectOriginList(response.data.projects);
                    setProjectList(filterProjectList(response.data.projects, userData._id).slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
                    setPageCount(Math.ceil(response.data.projects.length / pageLimit));
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    const _onNavigate = (url, states) => {
        navigate(url, { state: states });
    }

    /**
     * on page change
     * @param {*} 
     */
    const _onPageChange = (e) => {
        const selectedPage = e.selected;
        setPageCurrent(selectedPage + 1);
    }

    useEffect(() => {
        setProjectList(projectOriginList.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit));
    }, [pageCurrent]);

    useEffect(() => {
        if (watchProjectStatus) {
            if (+watchProjectStatus === TypeCode.FILLTER.ALL) {
                _getProjectList();
            } else {
                _onSearch({ project_status: parseInt(getValues('project_status'), 10) });
            }
        }

        // eslint-disable-next-line
    }, [watchProjectStatus]);

    useEffect(()=>{
        if(userData){
            _getProjectList();
        }
    },[userData]);

    useEffect(() => {
        if (token) {
            setUserData(getUserDataFromLocalStorage);
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
                                        <select className="choices form-select"
                                            {...register("project_status")}
                                        >
                                            <option value={TypeCode.FILLTER.ALL}>Tất cả</option>
                                            <option value={TypeCode.PROJECT.PROJECT_STATUS.OPENED}>Đang mở</option>
                                            <option value={TypeCode.PROJECT.PROJECT_STATUS.CLOSED}>Đã đóng</option>
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
                                                <th>Ngày bắt đầu</th>
                                                <th>Ngày kết thúc</th>
                                                <th>Loại</th>
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
                                                        <td style={{ width: '300px' }} className="cursor-pointer" onClick={() => _onNavigate(LinkName.PROJECT_DETAIL, { projectId: item._id })}>{item.project_name}</td>
                                                        <td className="text-bold-500 cursor-pointer" style={{ textAlign: 'center' }} onClick={() => _onNavigate(LinkName.USER_UPDATE, { userId: item?.project_manager?._id })}>
                                                            <div className="avatar me-3">
                                                                <img src={Common.ENV + item.project_manager.avatar} alt="" srcSet="" />
                                                            </div>
                                                            {item.project_manager.fullname}
                                                        </td>
                                                        <td>{formatDate(item.project_start_date)}</td>
                                                        <td>{formatDate(item.project_end_date)}</td>
                                                        <td>{TypeCode.PROJECT.TYPE_MAPPING[item.type]}</td>
                                                        <td>
                                                            {TypeCode.PROJECT.MODE_MAPPING[item.mode]}
                                                        </td>
                                                        <td>
                                                            <ul className="list-unstyled order-list m-b-0">
                                                                {
                                                                    item.members.length > 0 && (
                                                                        <>
                                                                            {item.members[0] && <li onClick={() => _onNavigate(LinkName.USER_UPDATE, { userId: item.members[0]._id })} className="team-member team-member-sm cursor-pointer"><img className="rounded-circle" src={Common.ENV + item.members[0].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[0].fullname} /></li>}
                                                                            {item.members[1] && <li onClick={() => _onNavigate(LinkName.USER_UPDATE, { userId: item.members[1]._id })} className="team-member team-member-sm cursor-pointer"><img className="rounded-circle" src={Common.ENV + item.members[1].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[1].fullname} /></li>}
                                                                            {item.members[2] && <li onClick={() => _onNavigate(LinkName.USER_UPDATE, { userId: item.members[2]._id })} className="team-member team-member-sm cursor-pointer"><img className="rounded-circle" src={Common.ENV + item.members[2].avatar} alt="user" data-toggle="tooltip" title="" data-original-title={item.members[2].fullname} /></li>}
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
                                                                {
                                                                    userData.role === TypeCode.USER.ROLE.ADMINISTRATOR &&
                                                                    <>
                                                                        <span className='px-1 cursor-pointer'><MdEdit onClick={() => toggleModalProjectUpdate(item._id)} /></span>
                                                                        <span className='px-1 cursor-pointer'><RiDeleteBin5Fill onClick={() => toggleModalConfirmDeleteProject(item._id, item.project_name)} /></span>
                                                                    </>
                                                                }
                                                                <span className='px-1 cursor-pointer'><BsPinAngleFill /></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    {
                                        projectList.length <= 0 && (
                                            <div className="text-center mt-5">
                                                <h6>Không có dự án nào !</h6>
                                            </div>
                                        )

                                    }
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
                modalProjectUpdate &&
                <ProjectUpdateScreen
                    modal={modalProjectUpdate}
                    toggle={toggleModalProjectUpdate}
                    id={projectId}
                />
            }
            {
                modalConfirmDeleteProject &&
                <ModalConfirmDeleteProjectComponent
                    modal={modalConfirmDeleteProject}
                    toggle={toggleModalConfirmDeleteProject}
                    keyWord={keyWord}
                    _onCallback={_onDelete}
                    id={projectId}
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