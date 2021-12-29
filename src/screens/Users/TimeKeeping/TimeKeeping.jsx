//icon
import { TiDelete } from "react-icons/ti";

export default function TimeKeepingScreen() {
    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">BẢNG CHẤM CÔNG CỦA TÔI</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="row px-3 pb-3 w-75">
                                <div className="col-sm-3">
                                    <h6>Ngày bắt đầu :</h6>
                                    <input className="form-control form-control-sm" type="date"
                                        placeholder="Small Input" />
                                </div>
                                <div className="col-sm-3">
                                    <h6>Ngày kết thúc :</h6>
                                    <input className="form-control form-control-sm" type="date"
                                        placeholder="Small Input" />
                                </div>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">Tìm kiếm</button>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="badges px-3 pb-3">
                                <span className="badge bg-success mr-5">Từ ngày: 01/01/2021  <TiDelete /></span>
                                <span className="badge bg-success mr-5">Đến ngày: 01/01/2022  <TiDelete /></span>
                            </div>
                            <div className="table-responsive px-3 pb-3">
                                <table className="table table-striped mb-0">
                                    <thead className="text-center">
                                        <tr>
                                            <th>STT</th>
                                            <th>Ngày</th>
                                            <th>Checkin</th>
                                            <th>Checkout</th>
                                            <th>Số giờ công</th>
                                            <th>Số giờ phép</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>5/12/2021</td>
                                            <td className="text-bold-500">08:00:33</td>
                                            <td>18:25:38</td>
                                            <td>8</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">2</td>
                                            <td>6/12/2021</td>
                                            <td className="text-bold-500">08:00:33</td>
                                            <td>18:25:38</td>
                                            <td>8</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">3</td>
                                            <td>7/12/2021</td>
                                            <td className="text-bold-500">08:00:33</td>
                                            <td>18:25:38</td>
                                            <td>8</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}