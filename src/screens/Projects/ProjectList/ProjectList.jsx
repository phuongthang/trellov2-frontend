import { useState } from 'react';

//Component
import Layout from '../../Layout/Layout';
import ProjectUpdateScreen from './../ProjectUpdate/ProjectUpdate';

//icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

export default function ProjectListScreen() {
    /**
     * define state
     */
    const [modalProjectUpdate, setModalProjectUpdate] = useState(false);
    const toggleModalProjectUpdate = () => {
        setModalProjectUpdate(!modalProjectUpdate);
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
                                <h4 class="card-title">DANH SÁCH DỰ ÁN</h4>
                            </div>
                            <div className="row px-3 pb-3">
                                <div className="col-sm-3">
                                    <h6>Trạng thái :</h6>
                                    <div className="position-relative">
                                        <select class="choices form-select">
                                            <option value="square">Rectangle</option>
                                            <option value="rectangle">Rectangle</option>
                                            <option value="rombo">Rombo</option>
                                            <option value="romboid">Romboid</option>
                                            <option value="trapeze">Trapeze</option>
                                            <option value="traible">Triangle</option>
                                            <option value="polygon">Polygon</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="table-responsive px-3 pb-3">
                                    <table class="table table-striped mb-0">
                                        <thead className="text-center">
                                            <tr>
                                                <th>STT</th>
                                                <th>Dự án</th>
                                                <th>Quản lý dự án</th>
                                                <th>Trạng thái</th>
                                                <th>Thành viên</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td class="text-bold-500">1</td>
                                                <td>LandMark</td>
                                                <td class="text-bold-500">
                                                    <div class="avatar me-3">
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    <div class="progress progress-success progress-sm">
                                                        <div class="progress-bar progress-label progress-bar-striped" role="progressbar" style={{ width: '35%' }}
                                                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="list-unstyled order-list m-b-0">
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" data-toggle="tooltip" title="" data-original-title="Wildan Ahdian" /></li>
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="user" data-toggle="tooltip" title="" data-original-title="John Deo" /></li>
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="user" data-toggle="tooltip" title="" data-original-title="Sarah Smith" /></li>
                                                        <li class="avatars avatars-sm"><span class="badge badge-primary">+4</span></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <span className='px-1'><MdEdit onClick={toggleModalProjectUpdate} /></span>
                                                        <span className='px-1'><RiDeleteBin5Fill /></span>
                                                        <span className='px-1'><BsPinAngleFill /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-bold-500">2</td>
                                                <td>Kondate</td>
                                                <td class="text-bold-500">
                                                    <div class="avatar me-3">
                                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcset="" />
                                                    </div>
                                                    Phương Công Thắng
                                                </td>
                                                <td>
                                                    <div class="progress progress-success progress-sm">
                                                        <div class="progress-bar progress-label progress-bar-striped" role="progressbar" style={{ width: '35%' }}
                                                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="list-unstyled order-list m-b-0">
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" data-toggle="tooltip" title="" data-original-title="Wildan Ahdian" /></li>
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="user" data-toggle="tooltip" title="" data-original-title="John Deo" /></li>
                                                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="user" data-toggle="tooltip" title="" data-original-title="Sarah Smith" /></li>
                                                        <li class="avatar avatar-sm"><span class="badge badge-primary">+4</span></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <span className='px-1'><MdEdit onClick={toggleModalProjectUpdate} /></span>
                                                        <span className='px-1'><RiDeleteBin5Fill /></span>
                                                        <span className='px-1'><BsPinAngleFill /></span>
                                                    </div>
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
                modalProjectUpdate &&
                <ProjectUpdateScreen
                    modal={modalProjectUpdate}
                    toggle={toggleModalProjectUpdate}
                />
            }
        </Layout>
    )
}