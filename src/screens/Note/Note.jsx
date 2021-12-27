//Component
import Layout from './../Layout/Layout';

//icon
import { RiSendPlaneFill } from "react-icons/ri";


export default function NoteScreen() {
    /**
     * render template
     */
    return (
        <Layout>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="media d-flex align-items-center">
                                    <div className="avatar me-3">
                                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64944343_2170617459897007_8832957907625574400_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=pW-lz2bqCPgAX9crA9K&_nc_ht=scontent-sin6-3.xx&oh=00_AT-a1jmIGLlEaoU4P4NrXLcZHDGv0mfU8vYYS5cWopcj_g&oe=61E48F55" alt="" srcSet="" />
                                        <span className="avatar-status bg-success" />
                                    </div>
                                    <div className="name flex-grow-1">
                                        <h6 className="mb-0">My Chat</h6>
                                        <span className="text-xs">Online</span>
                                    </div>
                                    <button className="btn btn-sm">
                                        <i data-feather="x" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body pt-4 bg-grey">
                                <div className="chat-content">
                                    <div className="chat chat-left">
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                I'm looking for the best admin dashboard template
                                            </div>
                                            <div className="chat-message">With bootstrap certainly</div>
                                        </div>
                                    </div>
                                    <div className="chat chat-left">
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                That"s great! I like it so much :)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="message-form d-flex flex-direction-column align-items-center">
                                    <div className="d-flex flex-grow-1 ml-4">
                                        <textarea
                                            type="text"
                                            rows={4}
                                            className="form-control"
                                            placeholder="Type your message.."
                                        />
                                    </div>
                                    <RiSendPlaneFill className='mx-2' style={{fontSize:'36px',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}