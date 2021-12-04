//Packet
import { useNavigate } from 'react-router-dom';

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
            navigate(LinkName.LOGIN);
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
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" alt="Logo" srcSet />
                            </a>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block">
                                <i className="bi bi-x bi-middle" />
                            </a>
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
                            <a href="#" className="sidebar-link">
                                <i className="bi bi-stack" />
                                <span>Thông tin cá nhân</span>
                            </a>
                            <ul className="submenu ">
                                <li className="submenu-item ">
                                    <a href="component-alert.html">Alert</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="component-badge.html">Badge</a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item  has-sub">
                            <a href="#" className="sidebar-link">
                                <i className="bi bi-collection-fill" />
                                <span>Dự án</span>
                            </a>
                            <ul className="submenu ">
                                <li className="submenu-item ">
                                    <a href="extra-component-avatar.html">Avatar</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="extra-component-sweetalert.html">Sweet Alert</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="extra-component-toastify.html">Toastify</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="extra-component-rating.html">Rating</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="extra-component-divider.html">Divider</a>
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