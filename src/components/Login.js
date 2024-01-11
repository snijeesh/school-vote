import React, {useState} from 'react';
import GraphqlClient from '../client/GraphqlClient'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        GraphqlClient.login();
        console.log('clicked');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;