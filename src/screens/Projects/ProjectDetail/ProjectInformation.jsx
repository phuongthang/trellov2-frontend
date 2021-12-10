export default function ProjectInformationComponent() {
    /**
     * render template
     */
    return (
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">THÔNG TIN</h4>
            </div>
            <div class="card-content px-3 pb-3">
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <tbody>
                            <tr>
                                <td class="text-bold-500">Dự án:</td>
                                <td>LandMark</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Ngày bắt đầu:</td>
                                <td>01/01/2021</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Ngày kết thúc</td>
                                <td>01/01/2022</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Quản lí:</td>
                                <td>Phương Công Thắng</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Trạng thái</td>
                                <td>Đang mở</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Chế độ</td>
                                <td>Không công khai</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}