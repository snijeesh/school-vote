import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function Logout() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleOnClick = () => {
        setUser('');
        navigate("/login");
    }

    return (
        <div>
            <input type='button' value='Logout' onClick={handleOnClick} ></input>
        </div>
    )
}

export default Logout;