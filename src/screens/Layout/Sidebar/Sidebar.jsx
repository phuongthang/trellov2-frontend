//Packet
import { Link, useNavigate } from 'react-router-dom';

//Constant
import LinkName from "../../../constants/linkName";

export default function Sidebar() {
    /**
     * reload component
     */
    let navigate = useNavigate();
    const _reload = () => {
        if(window.location.pathname === LinkName.HOME){
            window.location.reload();
        }else{
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
                                <img src="assets/images/logo/logo.png" alt="Logo" srcSet />
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
                        <li className="sidebar-item  ">
                            <span onClick={_reload} className="sidebar-link cursor-pointer">
                                <i className="bi bi-grid-fill" />
                                <span>Trang chủ</span>
                            </span>
                        </li>
                        <li className="sidebar-item has-sub">
                            <Link to="" className="sidebar-link">
                                <i className="bi bi-stack" />
                                <span>Thông tin cá nhân</span>
                            </Link>
                            <ul className="submenu ">
                                <li className="submenu-item ">
                                    <Link to={LinkName.TIME_KEEPING} >Thông tin cá nhân</Link>
                                </li>
                                <li className="submenu-item ">
                                    <Link to={LinkName.TIME_KEEPING} >Chấm công</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item  has-sub">
                            <Link to="" className="sidebar-link">
                                <i className="bi bi-collection-fill" />
                                <span>Dự án</span>
                            </Link>
                            <ul className="submenu ">
                                <li className="submenu-item ">
                                    <Link to="">Danh sách dự án</Link>
                                </li>
                                <li className="submenu-item ">
                                    <Link to="">Công việc</Link>
                                </li>
                                <li className="submenu-item ">
                                    <Link to="">Hoạt động</Link>
                                </li>
                            </ul>
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