//Components
import Layout from "../Layout/Layout";
import ActivityHistoryComponent from "./ActivityHistory";
import AnalystComponent from "./Analyst";
import InformationComponent from "./Information";
import ProjectList from "./ProjectList";

export default function HomeScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <div className="page-heading">
                <section className="section mt-3">
                    <div className="row">
                        <div class="col-xl-4 col-md-6 col-sm-12">
                            <InformationComponent/>
                        </div>
                        <div className="col-lg-8">
                            <AnalystComponent/>
                            <ProjectList/>
                            <ActivityHistoryComponent/>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}