import React from 'react';
import logo from '../school.jpg';
import Logout from './auth/Logout';
import Menu from './admin/Menu';
import './Header.css';

function Header() {

    return (
        <header className="App-header">
            <div className='logo-image'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='menu-wrapper'>
                <Menu />
                <Logout />
            </div>
        </header>
    )
}

export default Header;