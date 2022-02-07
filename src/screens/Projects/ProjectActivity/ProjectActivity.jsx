import { useState, useEffect } from "react";

//api
import commentApi from "../../../api/commentApi";

//constant
import Common from "../../../constants/common";
import LinkName from "../../../constants/linkName";
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from "../../../utils/utils";

//packet
import { useNavigate } from "react-router-dom";

//component
import ModalErrorComponent from "../../../components/Modal/ModalError/ModalError";

export default function ProjectActivityScreen() {

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();
    /**
     * define state
     */
    const [commentList, setCommentList] = useState([]);


    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const _getAllCommentList = () => {
        commentApi.all().then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setCommentList(response.data.comments);
                }
                else {
                    setMessage(response.data.message || 'Lấy danh sách bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy danh sách bình luận thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    useEffect(() => {
        if (token) {
            _getAllCommentList();
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);

    /**
     * render template
     */
    return (
        <section className="section">
            <div className="row" id="table-striped">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">LỊCH SỬ HOẠT ĐỘNG</h4>
                        </div>
                        <div className="card-content px-3 pb-3">
                            <h6>Không có lịch sử hoạt động nào gần đây !</h6>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalError &&
                <ModalErrorComponent
                    modal={modalError}
                    toggle={toggleModalError}
                    message={message}
                />
            }
        </section>
    )
}