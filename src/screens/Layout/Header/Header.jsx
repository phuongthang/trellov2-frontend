import { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

export default function Header(props) {

    const { data } = props;
    /**
    * define state
    */
    const [dropDownSmallAuth, setDropDownSmallAuth] = useState(false);
    const toggleDropDownSmallAuth = () => {
        setDropDownSmallAuth(!dropDownSmallAuth);
    }

    const [dropDownNotification, setDropDownNotification] = useState(false);
    const toggleDropDownNotification = () => {
        setDropDownNotification(!dropDownNotification);
    }

    /**
     * render template
     */
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <span className="burger-btn d-block " style={{ cursor: 'pointer' }}>
                        <i className="bi bi-justify fs-3 text-white-600" />
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Dropdown className="nav-item dropdown me-3" isOpen={dropDownNotification} toggle={toggleDropDownNotification}>
                                <DropdownToggle
                                    className="nav-link active dropdown-toggle"
                                >
                                    <i className="bi bi-bell bi-sub fs-4 text-white-600" />
                                </DropdownToggle>
                                <DropdownMenu
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li>
                                        <h6 className="dropdown-header">Thông báo</h6>
                                    </li>
                                    <li>
                                        <span className="dropdown-item">Không có thông báo nào !</span>
                                    </li>
                                </DropdownMenu>
                            </Dropdown>
                        </ul>
                        <Dropdown className="dropdown" isOpen={dropDownSmallAuth} toggle={toggleDropDownSmallAuth}>
                            <DropdownToggle>
                                <div className="user-menu d-flex">
                                    <div className="user-name text-end me-3">
                                        <h6 className="mb-0 text-white-600">{data.fullname ? data.fullname : '' }</h6>
                                        <p className="mb-0 text-sm text-white-600">{data.email ? data.email : ''}</p>
                                    </div>
                                    <div className="user-img d-flex align-items-center">
                                        <div className="avatar avatar-md">
                                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcSet="" />
                                            <span className="avatar-status bg-success"></span>
                                        </div>
                                    </div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu 
                                className="dropdown-menu dropdown-menu-end"
                            >
                                <li>
                                    <h6 className="dropdown-header">Xin chào, {data.fullname ? data.fullname : ''}!</h6>
                                </li>
                                <li>
                                    <span className="dropdown-item cursor-pointer">
                                        <i className="icon-mid bi bi-person me-2" />Thông tin
                                    </span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <span className="dropdown-item cursor-pointer">
                                        <i className="icon-mid bi bi-box-arrow-left me-2" /> Đăng xuất
                                    </span>
                                </li>
                            </DropdownMenu >
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </header>
    )
}