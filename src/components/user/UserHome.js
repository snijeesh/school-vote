import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

const UserHome = () => {
    const { userInfo } = useAuthContext();
    const [activateVoting, setActivateVoting] = useState({});

    useEffect(() => {
        console.log("use effect running.." + activateVoting?.isActivateVoting);

        if(!activateVoting?.isActivateVoting) {
            setActivateVoting({
                isActivateVoting: true
            });
        }
    });

    if (!userInfo && userInfo?.role !== 'user') {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }
    
    const handleOnClick = () => {
        
        console.log('voted');
        setActivateVoting({
            isActivateVoting: false
        });
    }

    return (
        <div>
            <div className="page-header">User home</div>
            <div>
                {
                    activateVoting?.isActivateVoting ?
                    <button onClick={handleOnClick} >Start Vote</button>
                    :
                    <></>
                }
                
            </div>        
        </div>
    );
};

export default UserHome;