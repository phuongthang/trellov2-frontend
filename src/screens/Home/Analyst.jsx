import { Alert } from "reactstrap";

export default function AnalystComponent() {
    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">THỐNG KÊ</h4>
                        </div>
                        <div className="card-content px-3 pb-3">
                            <Alert
                                color="primary"
                                className="cursor-pointer"
                            >
                                Ticket #1: Bug KH No.999 - Top (front)
                            </Alert>
                            <Alert
                                color="danger"
                                className="cursor-pointer"
                            >
                                Ticket #1: Bug KH No.999 - Top (front)
                            </Alert>
                            <Alert
                                color="primary"
                                className="cursor-pointer"

                            >
                               Ticket #1: Bug KH No.999 - Top (front)
                            </Alert>
                            <Alert
                                color="success"
                                className="cursor-pointer"

                            >
                                Ticket #1: Bug KH No.999 - Top (front)
                            </Alert>
                            <Alert
                                color="primary"
                                className="cursor-pointer"
                            >
                                Ticket #1: Bug KH No.999 - Top (front)
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}