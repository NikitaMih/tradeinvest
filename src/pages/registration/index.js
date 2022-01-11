import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const RegistrationPage = () => {

    const [login, SetLogin] = useState();
    const [password, SetPassword] = useState();
    const [email, SetEmail] = useState();
    const [phone, SetPhone] = useState();

    let formData = {
        login: login,
        password: password,
        email: email,
        phone: phone,
    }

    const onPostData = () => {
        fetch("http://localhost:3001/profiles",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
    }

    const onChangeLogin = (event) => {
        SetLogin(event.target.value)
    } 

    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    } 

    const onChangeEmail = (event) => {
        SetEmail(event.target.value)
    } 

    const onChangePhone = (event) => {
        SetPhone(event.target.value);
    } 



    return(
        <div className='wrapper'>
            <h2>Registration</h2>
            <div>
                <div>Login</div>
                <input onChange={onChangeLogin}></input>
            </div>
            <div>
                <div>Password</div>
                <input onChange={onChangePassword}></input>
                <div>Confirm the password</div>
                <input></input>
            </div>
            <div>
                <div>Email</div>
                <input onChange={onChangeEmail}></input>
            </div>
            <div>
                <div>Phone</div>
                <input onChange={onChangePhone}></input>
            </div>
            <button onClick={onPostData}>SING UP</button>
        </div>

    )
}

export default RegistrationPage;