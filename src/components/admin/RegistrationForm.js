import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

function RegistrationForm() {

    const { userToken } = useAuthContext();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    if (!userToken) {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }

    const handleInputChange = (event) => {
        const {id, value} = event.target;

        console.log(id);
        if(id === 'firstName') {
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName,lastName,email,password,confirmPassword);
        setFirstName('');
    }

    return (
        <form>
            <div>
                <div>
                    <label>First Name:</label>
                    <input type='text' id='firstName' value={firstName} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' id='lastName' value={lastName} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' id='email' value={email} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' id='password' value={password} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Confirm password:</label>
                    <input type='password' id='confirmPassword' value={confirmPassword} onChange={handleInputChange}></input>
                </div>
            </div>
            <div>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    );
}

export default RegistrationForm;