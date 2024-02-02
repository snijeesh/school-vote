import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";
import './Admin.css';

function RegistrationForm() {

    const { userInfo } = useAuthContext();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    if (!userInfo && userInfo.role === 'admin') {
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
        console.log(firstName,lastName,email,password,confirmPassword);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className='form'>
            <div className='form-body'>
                <div className='form-row'>
                    <div className='form-label-div'>
                        <label> First Name:</label>
                    </div>
                    <div className='form-input-div'>
                        <input  type='text' id='firstName' value={firstName} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-label-div'>
                        <label className='form-label'>Last Name:</label>
                    </div>
                    <div className='form-input-div'>
                        <input className='form-input' type='text' id='lastName' value={lastName} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-label-div'>
                        <label className='form-label'>Email:</label>
                    </div>
                    <div className='form-input-div'>
                        <input className='form-input' type='email' id='email' value={email} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-label-div'>
                        <label className='form-label'>Password:</label>
                    </div>
                    <div className='form-input-div'>
                        <input className='form-input' type='password' id='password' value={password} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-label-div'>
                        <label className='form-label'>Confirm password:</label>
                    </div>
                    <div className='form-input-div'>
                        <input className='form-input' type='password' id='confirmPassword' value={confirmPassword} onChange={handleInputChange}></input>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default RegistrationForm;