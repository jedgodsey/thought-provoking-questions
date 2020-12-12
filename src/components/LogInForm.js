import React, { useEffect, useState } from 'react';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';

const LogInForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameChange = (event) =>{
        setName(event.target.value);
    }
    const emailChange = (event) =>{
        setEmail(event.target.value);
    }
    const passwordChange = (event) =>{
        setPassword(event.target.value);
    }

    useEffect(()=>{

    },[]);

    return (
        <div className= "loginFrom">
            {/* This is Where the login form will be but for now here is some text and box */}
            {/* <form>
                <input 
                onChange = {nameChange}
                className = "form_input"
                type="text"
                placeholder = "Enter Name"
                value = {name}
                />
                <input 
                onChange = {emailChange}
                className = "form_input"
                type="text"
                placeholder = "Enter Email"
                value = {email}
                />
                <input 
                onChange = {passwordChange}
                className = "form_input"
                type="text"
                placeholder = "Enter Password"
                value = {password}
                />
            </form> */}
            <LoginModal/>
            <RegisterModal/>
            <Logout/>
        </div>
    );
}

export default LogInForm;
