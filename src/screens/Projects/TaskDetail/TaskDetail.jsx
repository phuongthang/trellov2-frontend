//Component
import { useState } from 'react';
import Layout from '../../Layout/Layout';
import TaskUpdateScreen from './../TaskUpdate/TaskUpdate';

export default function TaskDetailScreen() {
    /**
     * define state
     */
    const [modalTaskUpdate, setModalTaskUpdate] = useState(false);
    const toggleModalTaskUpdate = () => {
        setModalTaskUpdate(!modalTaskUpdate);
    }

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
                                    <h6 className="list-group-item">Quản lý:
                                        <div class="avatar avatar-sm px-2">
                                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                        </div>
                                        Phương Công Thắng
                                    </h6>
                                    <h6 className="list-group-item"></h6>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-8" style={{ borderLeft: '1px solid' }}>
                            <div className="card mb-1">
                                <div className="card-content">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">THÔNG TIN CÔNG VIỆC</h5>
                                        <button
                                            className='btn btn-sm btn-primary'
                                            onClick={toggleModalTaskUpdate}>
                                            Chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <h6 className="list-group-item">Tiêu đề: QA 550 - Bug Khách Hàng No.555 TOP mới</h6>
                                    <h6 className="list-group-item">Người tạo:
                                        <div class="avatar avatar-sm px-2">
                                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                        </div>
                                        Phương Công Thắng</h6>
                                    <h6 className="list-group-item">Trạng thái: New - Mức độ ưu tiên: Normal</h6>
                                    <h6 className="list-group-item">Chỉnh sửa lần cuối: 08:00 01/01/2021 <div class="avatar avatar-sm px-2">
                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                    </div>
                                        Phương Công Thắng</h6>
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
                                    <h6 className="list-group-item">Phân công cho:
                                        <div class="avatar avatar-sm px-2">
                                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                        </div>
                                        Phương Công Thắng</h6>
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
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
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
            {
                modalTaskUpdate &&
                <TaskUpdateScreen
                    modal={modalTaskUpdate}
                    toggle={toggleModalTaskUpdate}
                />
            }
        </Layout>
    )
}