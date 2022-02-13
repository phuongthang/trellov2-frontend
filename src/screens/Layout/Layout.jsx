import { useEffect, useState } from 'react';
//Component
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

//packet
import { Outlet, useNavigate } from 'react-router-dom';

//utils
import { getTokenFromLocalStorage, getUserDataFromLocalStorage } from '../../utils/utils';

//constant
import LinkName from './../../constants/linkName';

export default function Layout(props) {

    const token = getTokenFromLocalStorage();
    let navigate = useNavigate();

    /**
     * define state
     */
    const [userData, setUserData] = useState({});

    /**
     * get infor user from token
     */
    useEffect(() => {
        if(token){
            setUserData(getUserDataFromLocalStorage);
        }else{
            navigate(LinkName.LOGIN);
        }
        // eslint-disable-next-line
    },[token]);


    /**
     * render template
     */
    return (
        <div id="app">
            <Sidebar data = {userData}/>
            <div id="main" className='layout-navbar'>
                <Header data = {userData} />
                <div id="main-content">
                    <Outlet/>
                    {<Footer />}
                </div>
            </div>
        </div>
    );
}