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
                        <div className="col-xl-4 col-md-4 col-sm-4 pb-3">
                            <div className="card">
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
                        <div className="col-xl-8 col-md-8 col-sm-8">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body">
                                        <h5 className="card-title">THÔNG TIN CÔNG VIỆC</h5>
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
                        <div className="col-xl-4 col-md-4 col-sm-4 pb-12">
                            <div className="card">
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
                        <div className="col-xl-8 col-md-8 col-sm-8 pb-12">
                            <div className="card">
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
        </Layout>
    )
}