import React from 'react';
import { Link } from "react-router-dom";
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
            <Link to="/admin/home">Home</Link>
            <Link to="/admin/register">Register</Link>
        </div>
    );
}

export default Menu;