//image
import error_500 from "../../assets/img/error-500.png";

export default function Error500Screen() {
    /**
     * render template
     */
    return (
        <div id="error">
            <div className="error-page container">
                <div className="col-md-8 col-12 offset-md-2">
                    <img
                        className="img-error"
                        src={error_500}
                        alt="Not Found"
                    />
                    <div className="text-center">
                        <h1 className="error-title">System Error</h1>
                        <p className="fs-5 text-gray-600">
                            The website is currently unaivailable. Try again later or contact the
                            developer.
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