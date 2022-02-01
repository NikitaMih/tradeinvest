import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss'
import { useHistory } from "react-router-dom";


const setLoginAction = (login) => {
    return{
        type: 'SAVE_LOGIN',
        payload: login,
    }
}

const Login = ({hideLogin}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [login, SetLogin] = useState();
    const [password, SetPassword] = useState();
    const [err, SetErr] = useState(false);


    const onAuthorization = () =>{
        fetch(`http://localhost:3001/profile?login=${login}`)
        .catch(() => errAuthorization())
        .then((res) => res.json())
        .then((res) => onGoPage(res, login))
        .catch(() => errAuthorization())
    }

    const errAuthorization = () => {
        SetErr(true);
    }

    const onCancel = () => {
        hideLogin();
    }

    const onGoPage = (res, login) => {
        dispatch(setLoginAction(login))
        password === res[0].password && history.push("/account");
    }

    const onChangeLogin = (event) => {
        SetLogin(event.target.value);
    } 
    
    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    } 

    return(
        <div className='background-window'>
            <div className='login-window'>
                <button className='btn-cancel' onClick={onCancel}>x</button>
                <div className='login'>
                    <div className='title-modal-window'>Trade & Invest</div>
                    <div className='subtitle-modal-window'>Login</div>
                    {err && <div className='authorization-err'>Login or Password is not correct</div>}
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
                    <button className='btn-continue' onClick={onAuthorization}>CONTINUE</button>
                </div>
            </div>
        </div>
    )

}

export default Login;