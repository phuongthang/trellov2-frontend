export default function ProjectInformationComponent() {
    /**
     * render template
     */
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">THÔNG TIN</h4>
            </div>
            <div className="card-content px-3 pb-3">
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <tbody>
                            <tr>
                                <td className="text-bold-500">Dự án:</td>
                                <td>LandMark</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Ngày bắt đầu:</td>
                                <td>01/01/2021</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Ngày kết thúc</td>
                                <td>01/01/2022</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Quản lí:</td>
                                <td>Phương Công Thắng</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Trạng thái</td>
                                <td>Đang mở</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Chế độ</td>
                                <td>Không công khai</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}