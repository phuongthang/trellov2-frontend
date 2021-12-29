export default function ProjectList() {
    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">DANH SÁCH DỰ ÁN</h4>
                        </div>
                        <div className="card-content px-3 pb-3">
                            <div className="table-responsive">
                                <table className="table table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Dự án</th>
                                            <th>Chức vụ</th>
                                            <th>Ngày gia nhập</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>JRBus</td>
                                            <td>Member</td>
                                            <td>17/12/2020</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>LandMark</td>
                                            <td>Member</td>
                                            <td>01/03/2021</td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">1</td>
                                            <td>Kondate</td>
                                            <td>Member</td>
                                            <td>02/08/2021</td>
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