//Component
import Layout from '../../Layout/Layout';

//icon
import { DiAndroid } from "react-icons/di";

export default function TaskCreateScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">TẠO CÔNG VIỆC</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Dự án:</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="first-name-icon"
                                                            />
                                                            <div className="form-control-icon">
                                                                <DiAndroid />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="form-group has-icon-left">
                                                        <label htmlFor="first-name-icon text-bold-500">Phân loại:</label>
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
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon text-bold-500">Tiêu đề:</label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
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
                                                        <label htmlFor="first-name-icon text-bold-500">Mô tả:</label>
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
                                            <hr />
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon">Trạng thái :</label>
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
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon">Độ ưu tiên :</label>
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
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon">Phân công cho :</label>
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
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6 col-xs-6">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12 col-xs-12">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon">Công việc cha :</label>
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
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">Ngày bắt đầu :</label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="date"
                                                                        className="form-control"
                                                                        id="first-name-icon"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">Ngày kết thúc :</label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="date"
                                                                        className="form-control"
                                                                        id="first-name-icon"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">Thời gian :</label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="first-name-icon"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-6 col-xs-6">
                                                            <div className="form-group">
                                                                <label htmlFor="first-name-icon text-bold-500">Ngày kết thúc :</label>
                                                                <div className="position-relative">
                                                                    <input
                                                                        type="date"
                                                                        className="form-control"
                                                                        id="first-name-icon"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-icon text-bold-500">File tải lên:</label>
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
                </div>
            </section>
        </Layout>
    );
}