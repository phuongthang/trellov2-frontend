import { useState, useEffect } from 'react';
//Component
import ModalErrorComponent from '../../../components/Modal/ModalError/ModalError';
import ProjectAnalystComponent from './ProjectAnalyst';
import ProjectDocumentComponent from './ProjectDocument';
import ProjectInformationComponent from './ProjectInformation';
import ProjectMemberComponent from './ProjectMember';

//packet
import { useLocation, useNavigate } from 'react-router-dom';

//api
import projectApi from '../../../api/projectApi';

//constant
import Common from '../../../constants/common';
import { getTokenFromLocalStorage } from '../../../utils/utils';
import LinkName from '../../../constants/linkName';

export default function ProjectDetailScreen() {

    /**
     * get property
     */
     const { state } = useLocation();
     const projectId = state.projectId;

    let navigate = useNavigate();
    const token = getTokenFromLocalStorage();
    const [projectInfo, setProjectInfo] = useState({});

    const [modalError, setModalError] = useState(false);
    const toggleModalError = () => {
        setModalError(!modalError);
    }
    const [message, setMessage] = useState('');

    const _onDetail = (id) => {
        projectApi.detail(id).then(
            (response) => {
                if (response.status === Common.HTTP_STATUS.OK) {
                    setProjectInfo(response.data.project);
                }
                else {
                    setMessage(response.data.message || 'Lấy thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            },
            (error) => {
                if (error.response && error.response.status === Common.HTTP_STATUS.UNAUTHORIZED) {
                    navigate(LinkName.LOGIN);
                } else {
                    setMessage(error.response?.message || 'Lấy thông tin dự án thất bại. Vui lòng thử lại !');
                    toggleModalError();
                }
            }
        );
    }

    useEffect(() => {
        if (token) {
            _onDetail(projectId);
        } else {
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    }, [token]);
    /**
     * render template
     */
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 pb-3">
                        <ProjectInformationComponent projectInfo={projectInfo} />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectAnalystComponent projectInfo={projectInfo} />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectMemberComponent projectInfo={projectInfo} />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <ProjectDocumentComponent projectInfo={projectInfo} />
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
        </>
    )
}