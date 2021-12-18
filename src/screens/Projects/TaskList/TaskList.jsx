//Component
import Layout from '../../Layout/Layout';

//icon
import { MdBookmarkAdded } from "react-icons/md";

export default function TaskListScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <section class="section">
                <div class="row" id="table-striped">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">DANH SÁCH CÔNG VIỆC</h4>
                            </div>
                            <div className="row px-3 pb-3">
                                <div className="col-sm-3">
                                    <h6>Ngày bắt đầu :</h6>
                                    <input class="form-control form-control-sm" type="date"
                                        placeholder="Small Input" />
                                </div>
                                <div className="col-sm-3">
                                    <h6>Ngày kết thúc :</h6>
                                    <input class="form-control form-control-sm" type="date"
                                        placeholder="Small Input" />
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="table-responsive px-3 pb-3 table-task-list">
                                    <table class="table table-striped mb-0">
                                        <thead className="text-center">
                                            <tr>
                                                <th>ID</th>
                                                <th>Dự án</th>
                                                <th>Phân loại</th>
                                                <th>Trạng thái</th>
                                                <th>Độ ưu tiên</th>
                                                <th>Tiêu đề</th>
                                                <th>Phân công cho</th>
                                                <th>Cập nhật</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td class="text-bold-500">#1</td>
                                                <td>LandMark</td>
                                                <td>Bug</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger rounded-pill">New</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger rounded-pill">Cao</button>
                                                </td>
                                                <td>
                                                    Bug KH No.609 - input request (bãi đậu xe) (front)
                                                </td>
                                                <td class="text-bold-500">
                                                    <div class="avatar me-3">
                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    03/12/2021
                                                </td>
                                                <td>
                                                    <MdBookmarkAdded />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-bold-500">#2</td>
                                                <td>LandMark</td>
                                                <td>Bug</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger rounded-pill">New</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger rounded-pill">Cao</button>
                                                </td>
                                                <td>
                                                    Bug KH No.609 - input request (bãi đậu xe) (front)
                                                </td>
                                                <td class="text-bold-500">
                                                    <div class="avatar me-3">
                                                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    03/12/2021
                                                </td>
                                                <td>
                                                    <MdBookmarkAdded />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}