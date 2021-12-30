export default function InformationComponent() {
    /**
     * render template
     */
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="avatar avatar-xls me-3">
                            <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                            <span className="avatar-xl-status bg-success"></span>
                        </div>
                    </div>
                    <h5 className="mt-2 text-center">Phương Công Thắng</h5>
                    <div className="text-mute text-center"><h6>thang.pc@beetechsoft.vn</h6></div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item cursor-pointer"><h6>Danh sách dự án</h6></li>
                    <li className="list-group-item cursor-pointer">
                        <div className="card-content pb-3">
                            <div className="table-responsive">
                                <table className="table table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Dự án</th>
                                            <th>Chức vụ</th>
                                            <th>Ngày gia nhập</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>JRBus</td>
                                            <td>Member</td>
                                            <td>17/12/2020</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>LandMark</td>
                                            <td>Member</td>
                                            <td>01/03/2021</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>Kondate</td>
                                            <td>Member</td>
                                            <td>02/08/2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        <h5 className="card-title">Giới thiệu</h5>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h6>Email: thang.pc@beetechsoft.vn</h6></li>
                    <li className="list-group-item"><h6>Phòng ban: Information Technology</h6></li>
                    <li className="list-group-item"><h6>Ngày bắt đầu: 17/12/2020</h6></li>
                </ul>
            </div>
        </>
    )
}