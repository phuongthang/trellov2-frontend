export default function InformationComponent(){
    /**
     * render template
     */
    return (
        <>
            <div class="card">
                <div class="card-content">
                    <div className="d-flex justify-content-center mt-3">
                        <div class="avatar avatar-xls me-3">
                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/avatar-doi-ban-than-2021-22.jpg?fit=610%2C20000&quality=95&ssl=1" alt="" srcset="" />
                            <span class="avatar-xl-status bg-success"></span>
                        </div>
                    </div>
                    <h5 class="mt-2 text-center">Phương Công Thắng</h5>
                    <div className="text-mute text-center">Backend Developer</div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item cursor-pointer">Thống kê công việc</li>
                    <li class="list-group-item cursor-pointer">Dự án đang tham gia</li>
                    <li class="list-group-item cursor-pointer">Lịch sử hoạt động</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h5 class="card-title">Giới thiệu</h5>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: thang.pc@beetechsoft.vn</li>
                    <li class="list-group-item">Phòng ban: Information Technology</li>
                    <li class="list-group-item">Ngày bắt đầu: 17/12/2020</li>
                </ul>
            </div>
        </>
    )
}