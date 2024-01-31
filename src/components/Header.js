import React from 'react';
import logo from '../school.jpg';
import Logout from './auth/Logout';

function Header() {
    return (
        <header className="App-header">
            <Logout />
            <img src={logo} className="App-logo" alt="logo" />
            
        </header>
    )
}

export default Header;