//icon
import TypeCode from "../../../constants/typeCode";
import { useFormContext } from 'react-hook-form';

export default function StatusComponent(props) {

    const { register, getValues, formState: { errors } } = useFormContext();

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
                                        Trạng thái
                                    </h4>
                                </div>
                                <div className="card-body px-0 py-1">
                                    <ul className="widget-todo-list-wrapper widget-todo-list-wrapper-custom" id="widget-todo-list">
                                        <li className="widget-todo-item mt-2">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="new"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.NEW}
                                                            {...register(
                                                                "status"
                                                            )}

                                                        />
                                                        <label htmlFor="new" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.NEW]}</span>
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
                                                            id="inprogress"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.INPROGRESS}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="inprogress" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.INPROGRESS]}</span>
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
                                                            id="pending"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.PENDING}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="pending" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.PENDING]}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="widget-todo-item mt-2">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="feedback"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.FEEDBACK}
                                                            {...register(
                                                                "status"
                                                            )}

                                                        />
                                                        <label htmlFor="feedback" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.FEEDBACK]}</span>
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
                                                            id="waitting_review"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.WAITTING_REVIEW}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="waitting_review" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.WAITTING_REVIEW]}</span>
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
                                                            id="resolved"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.RESOLVED}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="resolved" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.RESOLVED]}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="widget-todo-item mt-2">
                                            <div className="widget-todo-title-wrapper d-flex justify-content-start align-items-center mb-2">
                                                <div className="widget-todo-title-area d-flex align-items-center">
                                                    <div className="checkbox checkbox-shadow">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input form-check-custom"
                                                            id="closed"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.CLOSED}
                                                            {...register(
                                                                "status"
                                                            )}

                                                        />
                                                        <label htmlFor="closed" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.CLOSED]}</span>
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
                                                            id="reject"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.REJECT}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="reject" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.REJECT]}</span>
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
                                                            id="other"
                                                            
                                                            value={TypeCode.PROJECT.STATUS.OTHER}
                                                            {...register(
                                                                "status"
                                                            )}
                                                        />
                                                        <label htmlFor="other" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.STATUS_MAPPING[TypeCode.PROJECT.STATUS.OTHER]}</span>
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