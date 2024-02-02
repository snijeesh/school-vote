import React from 'react';
import { NavLink } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

function Menu() {

    const { userToken } = useAuthContext();
    if(!userToken) {
        return (
            <div></div>
        )
    }

    return (
        <div className='menu'>
            <NavLink to="/admin/home">Home</NavLink>
            <NavLink to="/admin/register">Register</NavLink>
        </div>
    );
}

export default Menu;