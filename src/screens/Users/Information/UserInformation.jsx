//Component
import Layout from '../../Layout/Layout';

export default function UserInformationScreen() {
    return (
        <Layout>
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">THÔNG TIN CÁ NHÂN</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Họ :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Tên :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Tên"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Chấm công :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Chấm công"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Email :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Email cá nhân :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Email cá nhân"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Số điện thoại :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Số điện thoại"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Giới tính :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon">Ngày sinh :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Phòng ban :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Phòng ban"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Chức vụ :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Chức vụ"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Hình thức làm việc :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Hình thức làm việc"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Thành phố :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Quận/Huyện :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Tên"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Thị trấn/Xã :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Chấm công"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Địa chỉ thường trú :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Số chứng minh thư :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Ngày cấp :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Tên"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Nơi cấp :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Chấm công"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Tài khoản ngân hàng :</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Họ"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <i className="bi bi-person" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}