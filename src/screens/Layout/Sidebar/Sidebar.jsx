import { useEffect, useState } from 'react';
//Packet
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from "reactstrap"

//Constant
import LinkName from "../../../constants/linkName";
import Common from '../../../constants/common';
import TypeCode from '../../../constants/typeCode';


export default function Sidebar(props) {

    const { data } = props;
    /**
     * define constant
     */
    const listPathUserInformation = [LinkName.USER_INFORMATION, LinkName.TIME_KEEPING, LinkName.CHANGE_PASSWORD];
    const listPathProject = [LinkName.PROJECT_CREATE, LinkName.PROJECT_LIST, LinkName.PROJECT_DETAIL, LinkName.TASK_CREATE, LinkName.TASK_LIST, LinkName.PROJECT_ACTIVITY, LinkName.TASK_DETAIL];
    const listPathManager = [LinkName.USER_LIST, LinkName.USER_UPDATE, LinkName.USER_CREATE];
    const currentPath = window.location.pathname;

    /**
     * reload component
     */
    let navigate = useNavigate();
    const _onClickIconHomePage = () => {
        if (window.location.pathname === LinkName.HOME) {
            window.location.reload();
        } else {
            navigate(LinkName.HOME);
        }
    }

    /**
     * control open collapse
     */
    const [isOpenTabInformation, setOpenTabInformation] = useState(false);
    const [isOpenTabProject, setOpenTabProject] = useState(false);
    const [isOpenTabManager, setOpenTabManager] = useState(false);

    const toggleOpenCollaspe = (setCurrentState, state, tabType) => {
        switch (tabType) {
            case Common.NAV.USER:
                setOpenTabProject(false);
                setOpenTabManager(false)
                break;
            case Common.NAV.PROJECT:
                setOpenTabInformation(false);
                setOpenTabManager(false)
                break;
            case Common.NAV.MANAGER:
                setOpenTabProject(false);
                setOpenTabInformation(false);
                break;
            default:
                setOpenTabProject(false);
                setOpenTabInformation(false);
                setOpenTabManager(false);
        }
        setCurrentState(!state);
    }

    /**
     * check current path
     */
    useEffect(() => {
        if (listPathUserInformation.includes(currentPath)) {
            setOpenTabInformation(true);
        } else if (listPathProject.includes(currentPath)) {
            setOpenTabProject(true);
        } else if (listPathManager.includes(currentPath)) {
            setOpenTabManager(true);
        } else {
            setOpenTabInformation(false);
            setOpenTabProject(false);
            setOpenTabManager(false);
        }
    }, [currentPath]);// eslint-disable-line



    /**
     * render template
     */
    return (
        <div id="sidebar" className="active sidebar">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <span onClick={_onClickIconHomePage} className="cursor-pointer">
                                <h1>TrelloV2</h1>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className={`sidebar-item ${currentPath === LinkName.HOME ? 'active' : ''}`}>
                            <span onClick={_onClickIconHomePage} className="sidebar-link cursor-pointer">
                                <i className="bi bi-house-fill" />
                                <span>Trang chủ</span>
                            </span>
                        </li>

                        {
                            data?.role === TypeCode.USER.ROLE.ADMINISTRATOR &&
                            <>
                                <li onClick={() => toggleOpenCollaspe(setOpenTabManager, isOpenTabManager, Common.NAV.MANAGER)} className={`sidebar-item ${listPathManager.includes(currentPath) ? 'active' : ''}`}>
                                    <span className="sidebar-link cursor-pointer">
                                        <i className="bi bi-people-fill" />
                                        <span>Quản lí</span>
                                    </span>
                                </li>
                                <Collapse isOpen={isOpenTabManager} className={`sidebar-item`}>
                                    <ul className="submenu d-block">
                                        <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.USER_CREATE ? 'active' : ''}`}>
                                            <Link to={LinkName.USER_CREATE} >
                                                Thêm nhân viên
                                            </Link>
                                        </li>
                                        <li className={`d-flex align-items-center submenu-item ${(currentPath === LinkName.USER_LIST || currentPath === LinkName.USER_UPDATE) ? 'active' : ''}`}>
                                            <Link to={LinkName.USER_LIST} >
                                                Nhân sự
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </>
                        }
                        <>
                            <li onClick={() => toggleOpenCollaspe(setOpenTabInformation, isOpenTabInformation, Common.NAV.USER)} className={`sidebar-item ${listPathUserInformation.includes(currentPath) ? 'active' : ''}`}>
                                <span className="sidebar-link cursor-pointer">
                                    <i className="bi bi-person-bounding-box" />
                                    <span>Thông tin cá nhân</span>
                                </span>
                            </li>
                            <Collapse isOpen={isOpenTabInformation} className={`sidebar-item`}>
                                <ul className="submenu d-block">
                                    <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.USER_INFORMATION ? 'active' : ''}`}>
                                        <Link to={LinkName.USER_INFORMATION} >
                                            Thông tin
                                        </Link>
                                    </li>
                                    <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.TIME_KEEPING ? 'active' : ''}`}>
                                        <Link to={LinkName.TIME_KEEPING} >
                                            Chấm công
                                        </Link>
                                    </li>
                                    <li className={`d-flex align-items-center submenu-item ${currentPath === LinkName.CHANGE_PASSWORD ? 'active' : ''}`}>
                                        <Link to={LinkName.CHANGE_PASSWORD} >
                                            Đổi mật khẩu
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </>

                        <>
                            <li onClick={() => toggleOpenCollaspe(setOpenTabProject, isOpenTabProject, Common.NAV.PROJECT)} className={`sidebar-item ${listPathProject.includes(currentPath) ? 'active' : ''}`}>
                                <span className="sidebar-link cursor-pointer">
                                    <i className="bi bi-collection-fill" />
                                    <span>Dự án</span>
                                </span>
                            </li>
                            <Collapse isOpen={isOpenTabProject} className={`sidebar-item`}>
                                <ul className="submenu d-block">
                                    {
                                        data?.role === TypeCode.USER.ROLE.ADMINISTRATOR &&
                                        <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.PROJECT_CREATE ? 'active' : ''}`}>
                                            <Link to={LinkName.PROJECT_CREATE}>
                                                Tạo mới dự án
                                            </Link>
                                        </li>
                                    }
                                    <li className={`d-flex align-items-center submenu-item mb-1 ${(currentPath === LinkName.PROJECT_LIST || currentPath === LinkName.PROJECT_DETAIL) ? 'active' : ''}`}>
                                        <Link to={LinkName.PROJECT_LIST}>
                                            Danh sách dự án
                                        </Link>
                                    </li>
                                    <li className={`d-flex align-items-center mb-1 submenu-item ${(currentPath === LinkName.TASK_LIST || currentPath === LinkName.TASK_DETAIL || currentPath === LinkName.TASK_CREATE) ? 'active' : ''}`}>
                                        <Link to={LinkName.TASK_LIST}>
                                            Công việc
                                        </Link>
                                    </li>
                                    <li className={`d-flex align-items-center submenu-item ${currentPath === LinkName.PROJECT_ACTIVITY ? 'active' : ''}`}>
                                        <Link to={LinkName.PROJECT_ACTIVITY}>
                                            Hoạt động
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </>

                        <li className={`sidebar-item ${currentPath === LinkName.NOTE ? 'active' : ''}`}>
                            <Link to={LinkName.NOTE} className="sidebar-link cursor-pointer">
                                <i className="bi bi-pen-fill" />
                                <span>Ghi chú</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x">
                    <i data-feather="x" />
                </button>
            </div>
        </div>
    )
}