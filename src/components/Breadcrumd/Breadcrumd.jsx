//Constants
import Title from './../../constants/title';

export default function Breadcrumd(props) {
    /**
     * get property
     */
    const { title } = props;

    /**
     * render template
     */
    return (
        <div className="page-title">
            <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                    <h3>{title}</h3>
                </div>
                {
                    title !== Title.HOME &&
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav
                            aria-label="breadcrumb"
                            className="breadcrumb-header float-start float-lg-end"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                }
            </div>
        </div>
    )
}