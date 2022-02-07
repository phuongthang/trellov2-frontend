export default function ProjectMemberComponent(props) {
    const { projectInfo } = props;
    /**
     * render template
     */
    return (
        <>
        <div className="card">
            <div className="card-content">
                <div className="card-body">
                    <h5 className="card-title">THÀNH VIÊN</h5>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <h6 className="list-group-item">Project Manager: {projectInfo?.project_manager?.fullname}</h6>
                {
                    projectInfo?.members?.length > 0 && projectInfo?.members.map((item, idx) => (
                        <h6 key={idx} className="list-group-item">Thành viên: {item.fullname}</h6>
                    ))
                }
                <li className="list-group-item"></li>
            </ul>
        </div>
        </>
    )
}