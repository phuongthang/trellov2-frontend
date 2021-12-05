export default function InformationScreen() {
    return (
        <Layout>
            <section class="section">
                <div class="row" id="table-striped">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">BẢNG CHẤM CÔNG CỦA TÔI</h4>
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
                                <div class="table-responsive px-3 pb-3">
                                    <table class="table table-striped mb-0">
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
                                                <td class="text-bold-500">1</td>
                                                <td>5/12/2021</td>
                                                <td class="text-bold-500">08:00:33</td>
                                                <td>18:25:38</td>
                                                <td>8</td>
                                                <td>0</td>
                      
                                            </tr>
                                            <tr>
                                                <td class="text-bold-500">2</td>
                                                <td>6/12/2021</td>
                                                <td class="text-bold-500">08:00:33</td>
                                                <td>18:25:38</td>
                                                <td>8</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td class="text-bold-500">3</td>
                                                <td>7/12/2021</td>
                                                <td class="text-bold-500">08:00:33</td>
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
        </Layout>
    );
}