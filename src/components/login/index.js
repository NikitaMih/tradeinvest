import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const [login, SetLogin]  = useState();
    const [password, SetPassword] = useState();

    const onAuthorization = () =>{
        fetch(`http://localhost:3001/profiles?login=${login}`)
        .then((res) => res.json())
        .then((res) => password === res[0].password && history.push("/account"))
        .catch(() => console.log("err"))
    }
    
    const onChangeLogin = (event) => {
        SetLogin(event.target.value)
    } 

    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    } 

    return(
        <div className='background-window'>
            <div className='login-window'>
                <div className='login'>
                    <div className='title-modal-window'>Trade & Invest</div>
                    <div className='subtitle-modal-window'>Login</div>
                    <input 
                        type="text" 
                        placeholder='login' 
                        className='input-modal-window'
                        onChange={onChangeLogin}>
                    </input>
                    <input 
                        type="password"
                        placeholder='password' 
                        className='input-modal-window'
                        onChange={onChangePassword}>
                    </input>
                    <div className='btn-modal'>
                        <button className='btn-modal__continue' onClick={onAuthorization}>CONTINUE</button>
                        <button className='btn-modal__cancel'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;