//image
import error_403 from "../../assets/img/error-403.png";

export default function Error403Screen() {
    /**
     * render template
     */
    return (
        <div id="error">
            <div className="error-page container">
                <div className="col-md-8 col-12 offset-md-2">
                    <img
                        className="img-error"
                        src={error_403}
                        alt="Not Found"
                    />
                    <div className="text-center">
                        <h1 className="error-title">Forbidden</h1>
                        <p className="fs-5 text-gray-600">
                            You are unauthorized to see this page.
                        </p>
                        <a href="index.html" className="btn btn-lg btn-outline-primary mt-3">
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}