//image
import errors_404 from "../../assets/img/error-404.png";

export default function Errors404Screen() {
    /**
     * render template
     */
    return (
        <div id="error">
            <div className="error-page container">
                <div className="col-md-8 col-12 offset-md-2">
                    <img
                        className="img-error"
                        src={errors_404}
                        alt="Not Found"
                    />
                    <div className="text-center">
                        <h1 className="error-title">NOT FOUND</h1>
                        <p className="fs-5 text-gray-600">
                            The page you are looking not found.
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