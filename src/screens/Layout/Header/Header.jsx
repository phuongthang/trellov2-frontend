export default function Header() {
    /**
     * render template
     */
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <a href="#" className="burger-btn d-block">
                        <i className="bi bi-justify fs-3" />
                    </a>
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown me-1">
                                <a
                                    className="nav-link active dropdown-toggle"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-envelope bi-sub fs-4 text-gray-600" />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li>
                                        <h6 className="dropdown-header">Mail</h6>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            No new mail
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3">
                                <a
                                    className="nav-link active dropdown-toggle"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-bell bi-sub fs-4 text-gray-600" />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li>
                                        <h6 className="dropdown-header">Notifications</h6>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">No notification available</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="user-menu d-flex">
                                    <div className="user-name text-end me-3">
                                        <h6 className="mb-0 text-gray-600">Phương Công Thắng</h6>
                                        <p className="mb-0 text-sm text-gray-600">Backend Developer</p>
                                    </div>
                                    <div className="user-img d-flex align-items-center">
                                        <div className="avatar avatar-md">
                                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                            <span class="avatar-status bg-success"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <h6 className="dropdown-header">Hello, John!</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="icon-mid bi bi-person me-2" /> My Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="icon-mid bi bi-gear me-2" />
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="icon-mid bi bi-wallet me-2" />
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="icon-mid bi bi-box-arrow-left me-2" /> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}