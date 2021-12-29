import { useState } from 'react';
//Packet
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from "reactstrap"

//Constant
import LinkName from "../../../constants/linkName";
import Common from '../../../constants/common';


export default function Sidebar(props) {
    /**
     * define constant
     */
    const listPathUserInformation = [LinkName.USER_INFORMATION, LinkName.TIME_KEEPING];
    const listPathProject = [LinkName.PROJECT_CREATE, LinkName.PROJECT_LIST, LinkName.TASK_LIST, LinkName.PROJECT_ACTIVITY];
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
    const [isOpenTabProjectManager, setOpenTabProjectManager] = useState(false);

    const toggleOpenCollaspe = (setCurrentState, state, tabType) => {
        if(tabType === Common.NAV.USER){
            setOpenTabProjectManager(false);
        }else if(tabType === Common.NAV.PROJECT){
            setOpenTabInformation(false);
        }
        setCurrentState(!state);
    }



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
                        <li className={`sidebar-item ${currentPath === LinkName.USER_LIST ? 'active' : ''}`}>
                            <span className="sidebar-link cursor-pointer">
                                <i className="bi bi-people-fill" />
                                <span onClick={() => navigate(LinkName.USER_LIST)} >Nhân sự</span>
                            </span>
                        </li>
                        <>
                        <span onClick={()=>toggleOpenCollaspe(setOpenTabInformation, isOpenTabInformation, Common.NAV.USER)} className={`sidebar-link mt-2 ${listPathUserInformation.includes(currentPath) ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                            <i className="bi bi-person-bounding-box" />
                            <span>Thông tin cá nhân</span>
                        </span>
                        <Collapse isOpen={isOpenTabInformation} className={`sidebar-item`}>
                            <ul className="submenu d-block">
                                <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.USER_INFORMATION ? 'active' : ''}`}>
                                    <Link to={LinkName.USER_INFORMATION} >
                                        Thông tin
                                    </Link>
                                </li>
                                <li className={`d-flex align-items-center submenu-item ${currentPath === LinkName.TIME_KEEPING ? 'active' : ''}`}>
                                    <Link to={LinkName.TIME_KEEPING} >
                                        Chấm công
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                        </>

                        <>
                        <span onClick={()=>toggleOpenCollaspe(setOpenTabProjectManager, isOpenTabProjectManager, Common.NAV.PROJECT)} className={`sidebar-link mt-2 ${listPathProject.includes(currentPath) ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                            <i className="bi bi-collection-fill" />
                            <span>Dự án</span>
                        </span>
                        <Collapse isOpen={isOpenTabProjectManager} className={`sidebar-item`}>
                            <ul className="submenu d-block">
                                <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.PROJECT_CREATE ? 'active' : ''}`}>
                                    <Link to={LinkName.PROJECT_CREATE}>
                                        Tạo mới dự án
                                    </Link>
                                </li>
                                <li className={`d-flex align-items-center submenu-item mb-1 ${currentPath === LinkName.PROJECT_LIST ? 'active' : ''}`}>
                                    <Link to={LinkName.PROJECT_LIST}>
                                        Danh sách dự án
                                    </Link>
                                </li>
                                <li className={`d-flex align-items-center mb-1 submenu-item ${currentPath === LinkName.TASK_LIST ? 'active' : ''}`}>
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