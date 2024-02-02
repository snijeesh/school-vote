import React from 'react';
import useAuthContext from "./auth/UseAuthContext";

function UserName() {

    const { userInfo } = useAuthContext();
    if(!userInfo || !userInfo?.token) {
        return (
            <></>
        )
    }
    return (
        <div className='header-username'>Welcome {userInfo.name}</div>
    );
}

export default UserName;