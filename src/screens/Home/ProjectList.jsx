export default function ProjectList() {
    /**
     * render template
     */
    return (
        <section class="section">
            <div class="row" id="table-striped">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">DANH SÁCH DỰ ÁN</h4>
                        </div>
                        <div class="card-content px-3 pb-3">
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
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
                                            <td class="text-bold-500">1</td>
                                            <td>JRBus</td>
                                            <td>Member</td>
                                            <td>17/12/2020</td>
                                        </tr>
                                        <tr>
                                            <td class="text-bold-500">1</td>
                                            <td>LandMark</td>
                                            <td>Member</td>
                                            <td>01/03/2021</td>
                                        </tr>
                                        <tr>
                                            <td class="text-bold-500">1</td>
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