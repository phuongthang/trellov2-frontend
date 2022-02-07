//Packet
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

//constant
import LinkName from "../../constants/linkName";
import TypeCode from "../../constants/typeCode";

export default function AnalystComponent(props) {
    /**
     * get property
     */
    const { taskList } = props;

    let navigate = useNavigate();

    const COLOR_MAPPING = {
        0: 'dark',
        1: 'secondary',
        2: 'success',
        3: 'warning',
        4: 'danger'
    }

    const _onNavigate = (url, id) => {
        navigate(url, { state: { taskId: id } });
    }
    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">DANH SÁCH CÔNG VIỆC</h4>
                        </div>
                        <div className="card-content px-3 pb-3">
                            {
                                taskList.length > 0 && taskList.map((item, idx) => (
                                    <Alert
                                        key = {idx}
                                        color={COLOR_MAPPING[item.priority]}
                                        className="cursor-pointer"
                                        onClick={()=> _onNavigate(LinkName.TASK_DETAIL, item._id)}
                                    >
                                        #{item?.project?.project_name + ' - ' + TypeCode.PROJECT.CATEGORY_MAPPING[item.category] +' - ' + item.title}
                                    </Alert>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}