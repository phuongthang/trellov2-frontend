//icon
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CategoryComponent(props) {
    /**
     * render template
     */
    return (
        <div className="col-6">
            <div className="row">
                <section className="category">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card widget-todo">
                                <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                    <h4 className="card-title d-flex">
                                        <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                                        Phân loại
                                    </h4>
                                </div>
                                <div className="card-body px-0 py-1">
                                    <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                                        <li className="widget-todo-item mt-2">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="checkbox1"
                                                        />
                                                        <label htmlFor="checkbox1" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        Phương Công Thắng
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="widget-todo-item">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="checkbox1"
                                                        />
                                                        <label htmlFor="checkbox1" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        Nguyễn Thị Chinh
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="widget-todo-item">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="checkbox1"
                                                        />
                                                        <label htmlFor="checkbox1" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        Phạm Thị Ngân
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}