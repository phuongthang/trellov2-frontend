//constant
import TypeCode from "../../../constants/typeCode";
import { formatDate } from "../../../utils/helpers";

export default function ProjectInformationComponent(props) {

    const { projectInfo } = props;
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
                                <td>{projectInfo.project_name}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Ngày bắt đầu:</td>
                                <td>{formatDate(projectInfo.project_start_date)}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Ngày kết thúc:</td>
                                <td>{formatDate(projectInfo.project_end_date)}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Quản lí:</td>
                                <td>{projectInfo?.project_manager?.fullname}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Trạng thái:</td>
                                <td>{TypeCode.PROJECT.PROJECT_STATUS_MAPPING[projectInfo.project_status]}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Chế độ:</td>
                                <td>{TypeCode.PROJECT.MODE_MAPPING[projectInfo.mode]}</td>
                            </tr>
                            <tr>
                                <td className="text-bold-500">Loại:</td>
                                <td>{TypeCode.PROJECT.TYPE_MAPPING[projectInfo.type]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}