import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

function Menu() {

    const { userToken } = useAuthContext();
    const navigate = useNavigate();
    if(!userToken) {
        return (
            <div></div>
        )
    }

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
        <div className='menu'>
            <a id='home' onClick={ menuOnClick }>Home</a>|
            <a id='register' onClick={ menuOnClick }>Register</a>|
        </div>
    );
}

export default Menu;