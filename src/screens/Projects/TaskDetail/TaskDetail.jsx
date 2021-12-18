//Component
import Layout from '../../Layout/Layout';

export default function TaskDetailScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <section classname="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-4" style={{ borderRight: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">THÔNG TIN DỰ ÁN</h5>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Dự án: LandMark</h6>
                                    <h6 className="list-group-item">Ngày bắt đầu: 01/01/2021</h6>
                                    <h6 className="list-group-item">Ngày kết thúc: 01/01/2022</h6>
                                    <h6 className="list-group-item">Quản lý: Phương Công Thắng</h6>
                                    <h6 className="list-group-item"></h6>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-8" style={{ borderLeft: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">THÔNG TIN CÔNG VIỆC</h5>
                                        <button className='btn btn-sm btn-primary'>Chỉnh sửa</button>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Tiêu đề: QA 550 - Bug Khách Hàng No.555 TOP mới</h6>
                                    <h6 className="list-group-item">Người tạo: Phương Công Thắng</h6>
                                    <h6 className="list-group-item">Cập nhật: 08:00 01/01/2021</h6>
                                    <h6 className="list-group-item">Trạng thái: New - Mức độ ưu tiên: Normal</h6>
                                    <h6 className="list-group-item"></h6>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section classname="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-4" style={{ borderRight: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">Chi tiết công việc</h5>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Phân công cho: Phương Công Thắng</h6>
                                    <h6 className="list-group-item">Ngày bắt đầu: 01/01/2021</h6>
                                    <h6 className="list-group-item">Ngày kết thúc: 01/01/2022</h6>
                                    <h6 className="list-group-item"></h6>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-8" style={{ borderLeft: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">Mô tả:</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="row" id="table-striped">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">LỊCH SỬ HOẠT ĐỘNG</h4>
                            </div>
                            <div class="card-content px-3 pb-3">
                                <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section classname="section">
                <div className="card">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">GHI CHÚ</h5>
                                    </div>
                                </div>
                                <form className="form form-vertical px-5">
                                    <div className="form-body">
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>Mô tả:</h6></label>
                                                    <div className="position-relative">
                                                        <textarea
                                                            type="text"
                                                            rows={5}
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name-icon text-bold-500"><h6>File tải lên:</h6></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="first-name-icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-12 d-flex justify-content-center">
                                                <button type="button" class="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Lưu</button>
                                                <button type="button" class="btn btn-light-secondary btn-sm me-3 mb-3 mt-3 btn-custom">Hủy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}