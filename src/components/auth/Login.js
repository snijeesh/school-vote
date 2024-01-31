import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import GraphqlClient from '../../client/GraphqlClient'
import AuthContext from "./AuthContext";

const graphqlClient = new GraphqlClient();

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AuthContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var token = graphqlClient.login(username, password);
        console.log(token);

        if(token) {
            setUser(token);
            navigate("/admin/home");
        }
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