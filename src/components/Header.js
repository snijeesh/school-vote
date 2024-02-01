import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../school.jpg';
import Logout from './auth/Logout';
import useAuthContext from "./auth/UseAuthContext";
import './Header.css';

function Header() {

    const navigate = useNavigate();
    const { userToken } = useAuthContext();
    const [isActive, setActiveClass] = useState(true);
    console.log(userToken);
    // if(userToken) {
    //     setActiveClass(true);
    // }
    
    const menuOnClick = (event) => {
        const {id} = event.target;
        if(id === 'home') {
            navigate("/admin/home");
        }
        if(id === 'register') {
            navigate("/admin/register");
        }
    }

    return (
        <header className="App-header">
            <div className='logo-image'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='logoff-wrapper'>
                <a id='home' className={isActive ? 'link-active': 'link-inactive'} onClick={ menuOnClick }>Home|</a>
                <a id='register' className={isActive ? 'link-active': 'link-inactive'} onClick={ menuOnClick }>Register</a>
                <Logout />
            </div>
        </header>
    )
}

export default Header;