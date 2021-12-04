//Components
import Breadcrumd from "../../components/Breadcrumd/Breadcrumd";
import Layout from "../Layout/Layout";

//Constants
import Title from "../../constants/title";

export default function HomeScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <div className="page-heading">
                <Breadcrumd title={Title.HOME}/>
                <section className="section mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Example Content</h4>
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                            quas omnis laudantium tempore exercitationem, expedita aspernatur sed
                            officia asperiores unde tempora maxime odio reprehenderit distinctio
                            incidunt! Vel aspernatur dicta consequatur!
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}