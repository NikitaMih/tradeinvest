import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

const RegistrationPage = () => {

    const history = useHistory();

    const [login, SetLogin] = useState();
    const [password, SetPassword] = useState();
    const [email, SetEmail] = useState();
    const [phone, SetPhone] = useState();

    let formData = {
        id: login,
        login: login,
        password: password,
        email: email,
        phone: phone,
        wallet: {
            EUR: 0,
            RUB: 0,
            USD: 0,
            BTC: 0,
            ETH: 0,
            Litecoin: 0,
            Apple: 0,
            Facebook: 0,
            Amazon: 0,
        },
    };

    const onPostData = () => {
        fetch("http://localhost:3001/profile",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        goMain()
    };

    const goMain = () => {
        history.goBack();
    };

    const onChangeLogin = (event) => {
        SetLogin(event.target.value);
    };

    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    };

    const onChangeEmail = (event) => {
        SetEmail(event.target.value);
    }; 

    const onChangePhone = (event) => {
        SetPhone(event.target.value);
    }; 

    return(
        <div className='registration'>
            <div className='registration__blok-form'>
                <div className='registration-form'>
                    <h2 className='registration-form__title'>Registration</h2>
                    <div className='registration-form__login'>
                        <div className='registration-form__subtitle'>Login</div>
                        <input type='text' className='registration-form__input' onChange={onChangeLogin}></input>
                    </div>
                    <div className='registration-form__password'>
                        <div>
                            <div className='registration-form__subtitle'>Password</div>
                            <input type='password' className='registration-form__input' onChange={onChangePassword}></input>
                        </div>
                        <div>
                            <div className='registration-form__subtitle'>Confirm the password</div>
                            <input type='password' className='registration-form__input'></input>
                        </div>
                    </div>
                    <div>
                        <div className='registration-form__subtitle'>Email</div>
                        <input type='text' className='registration-form__input' onChange={onChangeEmail}></input>
                    </div>
                    <div>
                        <div className='registration-form__subtitle'>Phone</div>
                        <input type='text' className='registration-form__input' onChange={onChangePhone}></input>
                    </div>
                    <button className='registration-form__btn-send' onClick={onPostData}>SING UP</button>
                </div>
            </div>
            <div className='registration__blok-img'>
                <div className='registration__logo'>Trade & Invest</div>
            </div>
        </div>
    )
};

export default RegistrationPage;