//Component
import ProjectAnalystComponent from './ProjectAnalyst';
import ProjectDocumentComponent from './ProjectDocument';
import ProjectInformationComponent from './ProjectInformation';
import ProjectMemberComponent from './ProjectMember';

export default function ProjectDetailScreen() {
    /**
     * render template
     */
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 pb-3">
                        <ProjectInformationComponent />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectAnalystComponent/>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectMemberComponent />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectDocumentComponent />
                    </div>
                </div>
            </section>
        </>
    )
}