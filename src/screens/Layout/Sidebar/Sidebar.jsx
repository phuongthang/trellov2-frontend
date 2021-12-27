//Packet
import { Link, useNavigate } from 'react-router-dom';

//Constant
import LinkName from "../../../constants/linkName";


export default function Sidebar() {
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
    const _reload = () => {
        if (window.location.pathname === LinkName.HOME) {
            window.location.reload();
        } else {
            navigate(LinkName.HOME);
        }
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
                            <span onClick={_reload} className="cursor-pointer">
                                <h1>TrelloV2</h1>
                            </span>
                        </div>
                        <div className="toggler">
                            <span onClick={_reload} className="sidebar-hide d-xl-none d-block cursor-pointer">
                                <i className="bi bi-x bi-middle" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>
                        <li className={`sidebar-item ${currentPath === LinkName.HOME ? 'active' : ''}`}>
                            <span onClick={_reload} className="sidebar-link cursor-pointer">
                                <i className="bi bi-grid-fill" />
                                <span>Trang chủ</span>
                            </span>
                        </li>
                        <li className={`sidebar-item ${listPathUserInformation.includes(currentPath) ? 'active' : ''}`}>
                            <span className="sidebar-link" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-stack" />
                                <span>Thông tin cá nhân</span>
                            </span>
                            <ul className="submenu d-block">
                                <li className={`d-flex align-items-center submenu-item mb-1 mt-2 ${currentPath === LinkName.USER_INFORMATION ? 'active' : ''}`}>
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
                        </li>
                        <li className={`sidebar-item ${listPathProject.includes(currentPath) ? 'active' : ''}`}>
                            <span className="sidebar-link" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-collection-fill" />
                                <span>Dự án</span>
                            </span>
                            <ul className="submenu d-block">
                                <li className={`d-flex align-items-center submenu-item mb-1 mt-2 ${currentPath === LinkName.PROJECT_CREATE ? 'active' : ''}`}>
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
                        </li>
                        <li className={`sidebar-item ${currentPath === LinkName.NOTE ? 'active' : ''}`}>
                            <Link to={LinkName.NOTE} className="sidebar-link cursor-pointer">
                                <i className="bi bi-grid-fill" />
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