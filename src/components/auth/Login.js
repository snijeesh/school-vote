import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import GraphqlClient from '../../client/GraphqlClient'
import AuthContext from "./AuthContext";
import './Auth.css';

const graphqlClient = new GraphqlClient();

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const { setUserInfo } = useContext(AuthContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var userInfo = graphqlClient.login(username, password);

        if(userInfo.token) {
            setUserInfo(userInfo);

            if(userInfo.role === 'admin') {
                navigate("/admin/home");
            }
            if(userInfo.role === 'user') {
                navigate("/user/home");
            }
        }
        setLoginError('Invalid Username or Password');
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className='form-label-div'>
                    <label>Username:</label>
                </div>
                <div className='form-input-div'>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-label-div'>
                    <label>Password:</label>
                </div>
                <div className='form-input-div'>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div className='footer'>
                <button type="submit">Login</button>
            </div>
            <div className='error-label'>
                <label>{loginError}</label>
            </div>
        </form>
    )
}

export default Login;