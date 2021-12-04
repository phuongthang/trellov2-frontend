export default function Footer() {
    /**
     * render template
     */
    return (
        <footer>
            <div className="footer clearfix mb-0 text-muted">
                <div className="float-end">
                    <p>
                        A product created{" "}
                        <span className="text-danger">
                            <i className="bi bi-heart-fill icon-mid" />
                        </span>
                         by <a href="https://ahmadsaugi.com">Phương Thắng</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}