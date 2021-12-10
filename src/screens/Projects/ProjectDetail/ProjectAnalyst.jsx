export default function ProjectAnalystComponent() {
    /**
     * render template
     */
    return (
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">THỐNG KÊ</h4>
            </div>
            <div class="card-content px-3 pb-3">
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>Trạng thái</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-bold-500">New</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Pending</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Close</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Resolve</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Waiting review</td>
                                <td>01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}