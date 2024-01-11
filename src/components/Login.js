import React from 'react';

function loginClick() {
    console.log('clicked');
}

function Login() {
    return (
        <div>
            Username: <input type="text" ></input> <br/>
            Password: <input type="text" ></input> <br/>
            <input type="button" value="Login" onClick={loginClick}></input>
        </div>
    )
}

export default Login;