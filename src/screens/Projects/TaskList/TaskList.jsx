import { useState } from 'react';

//Component
import Layout from '../../Layout/Layout';
import TaskUpdateScreen from '../TaskUpdate/TaskUpdate';
import TaskFillterComponent from '../../Fillters/TaskFillter/TaskFillter';

//icon
import { MdBookmarkAdded } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export default function TaskListScreen() {
    /**
     * define state
     */
    const [modalTaskUpdate, setModalTaskUpdate] = useState(false);
    const toggleModalTaskUpdate = () => {
        setModalTaskUpdate(!modalTaskUpdate);
    }

    const [modalTaskFillter, setModalTaskFillter] = useState(false);
    const toggleModalTaskFillter = () => {
        setModalTaskFillter(!modalTaskFillter);
    }



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
                                <div className="d-flex justify-content-between">
                                    <h4 class="card-title">DANH SÁCH CÔNG VIỆC</h4>
                                    <div className="">
                                        <button
                                            className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom"
                                            onClick={toggleModalTaskFillter}
                                        >Tìm kiếm
                                        </button>
                                        <button
                                            className="btn btn-warning btn-sm me-3 mb-3 mt-3 btn-custom"
                                        >Xuất file
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="badges px-3 pb-3">
                                    <span class="badge bg-success mr-5">LandMark  <TiDelete /></span>
                                    <span class="badge bg-success mr-5">Đang mở  <TiDelete /></span>
                                    <span class="badge bg-success">Phương Công Thắng  <TiDelete /></span>
                                </div>
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
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    03/12/2021
                                                </td>
                                                <td>
                                                    <MdBookmarkAdded onClick={toggleModalTaskUpdate} />
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
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    03/12/2021
                                                </td>
                                                <td>
                                                    <MdBookmarkAdded onClick={toggleModalTaskUpdate} />
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
            {
                modalTaskFillter &&
                <TaskFillterComponent
                    modal={modalTaskFillter}
                    toggle={toggleModalTaskFillter}
                />
            }
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