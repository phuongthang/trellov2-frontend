//icon
import TypeCode from "../../../constants/typeCode";
import { useFormContext } from 'react-hook-form';

export default function CategoryComponent(props) {

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
                                                            id="feature"
                                                            defaultChecked
                                                            value={TypeCode.PROJECT.CATEGORY.FEATURE}
                                                            {...register(
                                                                "category"
                                                            )}

                                                        />
                                                        <label htmlFor="feature" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.FEATURE]}</span>
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
                                                            id="bug"
                                                            defaultChecked
                                                            value={TypeCode.PROJECT.CATEGORY.BUG}
                                                            {...register(
                                                                "category"
                                                            )}
                                                        />
                                                        <label htmlFor="bug" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.BUG]}</span>
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
                                                            id="qa"
                                                            defaultChecked
                                                            value={TypeCode.PROJECT.CATEGORY.QA}
                                                            {...register(
                                                                "category"
                                                            )}
                                                        />
                                                        <label htmlFor="qa" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.QA]}</span>
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
                                                            id="update"
                                                            defaultChecked
                                                            value={TypeCode.PROJECT.CATEGORY.UPDATE}
                                                            {...register(
                                                                "category"
                                                            )}

                                                        />
                                                        <label htmlFor="update" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.UPDATE]}</span>
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
                                                            defaultChecked
                                                            value={TypeCode.PROJECT.CATEGORY.OTHER}
                                                            {...register(
                                                                "category"
                                                            )}
                                                        />
                                                        <label htmlFor="other" />
                                                    </div>
                                                    <span className="widget-todo-title px-3">
                                                        <span className="item-fullname">{TypeCode.PROJECT.CATEGORY_MAPPING[TypeCode.PROJECT.CATEGORY.OTHER]}</span>
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