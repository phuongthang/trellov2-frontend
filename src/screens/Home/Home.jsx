//Components
import ActivityHistoryComponent from "./ActivityHistory";
import AnalystComponent from "./Analyst";
import InformationComponent from "./Information";

export default function HomeScreen() {
    /**
     * render template
     */
    return (
        <div className="page-heading">
            <section className="section mt-3">
                <div className="row">
                    <div className="col-xl-5 col-md-5 col-sm-5">
                        <InformationComponent />
                    </div>
                    <div className="col-lg-7">
                        <AnalystComponent />
                        <ActivityHistoryComponent />
                    </div>
                </div>
            </section>
        </div>
    )
}