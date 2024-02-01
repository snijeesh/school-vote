import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import useAuthContext from "../auth/UseAuthContext";

function Logout() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const { userToken } = useAuthContext();

    if(!userToken) {
        return (
            <div></div>
        )
    }
    
    const handleOnClick = () => {
        setUser('');
        navigate("/login");
    }

    return (
        <div className='logoff-button'>
            <input type='button' value='Logout' onClick={handleOnClick} ></input>
        </div>
    )
}

export default Logout;