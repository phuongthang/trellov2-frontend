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
                            <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcset="" />
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