//Components
import ActivityHistoryComponent from "./ActivityHistory";
import AnalystComponent from "./Analyst";
import InformationComponent from "./Information";
import { useEffect } from 'react';

export default function HomeScreen() {

    useEffect(() => {
        for (let item of Object.keys(localStorage)) {
            if (!['token'].includes(item)) {
                localStorage.removeItem(item);
            }
        }
    }, []);
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