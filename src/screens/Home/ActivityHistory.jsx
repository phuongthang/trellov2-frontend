//constant
import Common from "../../constants/common";
import TypeCode from "../../constants/typeCode";
import { formatDate } from "../../utils/helpers";
import { formatDateTime } from './../../utils/helpers';

//packet
import ReactPaginate from 'react-paginate';

//icon
import { ImBackward2, ImForward3 } from "react-icons/im";

export default function ActivityHistoryComponent(props) {

    const { historyList, onPageChange, pageCount } = props;
    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">LỊCH SỬ HOẠT ĐỘNG</h4>
                        </div>
                        <div className="card-content px-3 pb-3">
                            {
                                historyList.length > 0 && historyList.map((item, idx) => (
                                    <div className="row" key={idx}>
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="media d-flex align-items-center">
                                                    <div className="avatar me-3">
                                                        <img src={Common.ENV + item.user_create.avatar} alt="" srcSet="" />
                                                        <span className="avatar-status bg-success" />
                                                    </div>
                                                    <div className="name flex-grow-1">
                                                        <h6 className="mb-0">{item.user_create.fullname}</h6>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="text-xs">{formatDateTime(item.created_at)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="media d-flex align-items-center">
                                                    <div className="name flex-grow-1 px-3">
                                                        <h6 className="mb-0"><strong>#{item?.task?.project?.project_name + ' - ' + TypeCode.PROJECT.CATEGORY_MAPPING[item?.task?.category] + ' - ' + item?.task?.title}</strong></h6>
                                                    </div>
                                                </div>
                                                <div className="bg-grey pt-4">
                                                    <div className="chat-message pre-line">
                                                        <ul>
                                                            {item.project && <li><h6><strong>Dự án</strong> thay đổi từ <strong>{item?.old_project?.project_name + ' - ' + item?.new_project?.project_name}</strong>.</h6></li>}
                                                            {item.title && <li><h6><strong>Tiêu đề</strong> thay đổi từ <strong>{item.old_title + ' - ' + item.new_title}</strong>.</h6></li>}
                                                            {item.description && <li><h6><strong>Mô tả</strong> <strong>đã được cập nhật</strong>.</h6></li>}
                                                            {item.category && <li><h6><strong>Phân loại</strong> thay đổi từ <strong>{TypeCode.PROJECT.CATEGORY_MAPPING[item.old_category] + ' - ' + TypeCode.PROJECT.CATEGORY_MAPPING[item.new_category]}</strong>.</h6></li>}
                                                            {item.status && <li><h6><strong>Trạng thái</strong> thay đổi từ <strong>{TypeCode.PROJECT.STATUS_MAPPING[item.old_status] + ' - ' + TypeCode.PROJECT.STATUS_MAPPING[item.new_status]}</strong>.</h6></li>}
                                                            {item.priority && <li><h6><strong>Độ ưu tiên</strong> thay đổi từ <strong>{TypeCode.TASK.PRIORITY_MAPPING[item.old_priority] + ' - ' + TypeCode.TASK.PRIORITY_MAPPING[item.new_priority]}</strong>.</h6></li>}
                                                            {item.task_start_date && <li><h6><strong>Ngày bắt đầu</strong> thay đổi từ <strong>{formatDate(item.old_task_start_date) + ' - ' + formatDate(item.new_task_start_date)}</strong>.</h6></li>}
                                                            {item.task_end_date && <li><h6><strong>Ngày kết thúc</strong> thay đổi từ <strong>{formatDate(item.old_task_end_date) + ' - ' + formatDate(item.new_task_end_date)}</strong>.</h6></li>}
                                                            {item.estimate_time && <li><h6><strong>Thời gian dự kiến</strong> thay đổi từ <strong>{(item.old_estimate_time ? item.old_estimate_time : 0) + 'h - ' + item.new_estimate_time}h</strong>.</h6></li>}
                                                            {item.actual_time && <li><h6><strong>Thời gian thực tế</strong> thay đổi từ <strong>{(item.old_actual_time ? item.old_actual_time : 0) + 'h - ' + item.new_actual_time}h</strong>.</h6></li>}
                                                            {item.assign && <li><h6><strong>Phân công</strong> cho thay đổi từ
                                                                <div className="avatar avatar-sm px-2">
                                                                    <img src={Common.ENV + item?.old_assign?.avatar} alt="" srcSet="" />
                                                                </div>
                                                                <strong>{item?.old_assign?.fullname + ' - '}</strong>
                                                                <div className="avatar avatar-sm px-2">
                                                                    <img src={Common.ENV + item?.new_assign?.avatar} alt="" srcSet="" />
                                                                </div>
                                                                <strong>{item?.new_assign?.fullname}</strong>.</h6></li>}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                historyList.length <= 0 && <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                            }
                        </div>
                        {pageCount > 1 && <div className="d-flex justify-content-center">
                            <ReactPaginate
                                previousLabel={<ImBackward2 />}
                                nextLabel={<ImForward3 />}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}