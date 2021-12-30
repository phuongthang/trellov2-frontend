//Component
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

//packet
import { Outlet} from 'react-router-dom';

export default function Layout(props) {
    /**
     * render template
     */
    return (
        <div id="app">
            <Sidebar />
            <div id="main" className='layout-navbar'>
                <Header />
                <div id="main-content">
                    <Outlet/>
                    {<Footer />}
                </div>
            </div>
        </div>
    );
}