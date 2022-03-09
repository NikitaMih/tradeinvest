import React, { useState } from 'react';
import './registrationStyle.scss';
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";
import ModalWindow from '../../components/modalWindow/modalWindowIndex';
import { colors } from '../../config/js';

const RegistrationPage = () => {

    const history = useHistory();

    const [login, SetLogin] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    const [errLogin, SetErrLogin] = useState(colors.dark);
    const [errPassword, SetErrPassword] = useState(colors.dark);
    const [errConfirmPassword, SetErrConfirmPassword] = useState(colors.dark);
    const [errEmail, SetErrEmail] = useState(colors.dark);
    const [errPhone, SetErrPhone] = useState(colors.dark);
    const [showPasswordImg, SetShowPasswordImg] = useState('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7');
    const [showConfirmPasswordImg, SetShowConfirmPasswordImg] = useState('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7');

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

       const rePassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/i; 
       const reEmail = /^[\w]{1}[\w\.]*@[\w]+\.[a-z]{2,4}$/i;
       const rePhone = /(\+375)[\s(]*\d{2}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/i;

        login.length > 0 ? SetErrLogin(colors.dark) : SetErrLogin(colors.red);
        rePassword.test(password) ? SetErrPassword(colors.dark) : SetErrPassword(colors.red);
        password === confirmPassword ? SetErrConfirmPassword(colors.dark) : SetErrConfirmPassword(colors.red);
        reEmail.test(email) ? SetErrEmail(colors.dark) : SetErrEmail(colors.red);
        rePhone.test(phone) ? SetErrPhone(colors.dark) : SetErrPhone(colors.red);

        if(login.length > 0 && rePassword.test(password) && password === confirmPassword && reEmail.test(email) && rePhone.test(phone)){
            PostData();
        }
    };

    const PostData = () => {
        fetch("http://localhost:3001/profile",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(() => goMain())
        .catch(() => alert('Error connect with server'))
    };

    const goMain = () => {
        SetTextModal('SUCCESSFULLY REGISTERED');
        SetShowWindow(true);
        setTimeout(() => {
            history.goBack();
            SetShowWindow(false);
        }, 1000);
    };

    const onChangeLogin = (event) => {
        SetLogin(event.target.value);
    };

    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    };

    const onChangeConfirmPassword = (event) => {
        SetConfirmPassword(event.target.value);
    };

    const onChangeEmail = (event) => {
        SetEmail(event.target.value);
    }; 

    const onChangePhone = (event) => {
        SetPhone(event.target.value);
    };

    const onShowPassword = () => {
        const inputPassword = document.getElementById('input-password-registration');
        if(inputPassword.value.length > 0){
            inputPassword.type === 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password';
            inputPassword.type === 'password' ? SetShowPasswordImg('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7') : SetShowPasswordImg('https://cdn-icons.flaticon.com/png/512/2874/premium/2874802.png?token=exp=1646655582~hmac=4ac654f7f07e6dbc25d2ce9998dfbe33'); 
        }
    }

    const onShowConfirmPassword = (input) => {
        if(input.value.length > 0){
            input.type === 'password' ? input.type = 'text' : input.type = 'password';
            input.type === 'password' ? SetShowConfirmPasswordImg('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7') : SetShowConfirmPasswordImg('https://cdn-icons.flaticon.com/png/512/2874/premium/2874802.png?token=exp=1646655582~hmac=4ac654f7f07e6dbc25d2ce9998dfbe33'); 
        }
    }

    return(
        <div className='registration'>
            <div className='registration__blok-form'>
                <div className='registration-form'>
                    <h2 className='registration-form__title'>Registration</h2>
                    <div className='registration-form__login'>
                        <div className='registration-form__subtitle'>
                            <div>Login</div>
                            <div style={{color:errLogin}}>Login incorrect</div>
                        </div>
                        <input type='text' className='registration-form__input' onChange={onChangeLogin}></input>
                    </div>
                    <div className='registration-form__password'>
                        <div>
                            <div className='registration-form__subtitle'>
                                <div>Password</div>
                                <div style={{color:errPassword}}>Password does not meet security requirements</div>
                            </div>
                            <div className='registration-form__input password'>
                                <label className='input-password-registration' title='Password must include a minimum of 6 characters, both upper and lower case, and at least one number.'>
                                    <input id='input-password-registration' type='password' className='input-password-registration' onChange={onChangePassword}></input>
                                </label>
                                <label className='check'>
                                    <input 
                                        type="checkbox" 
                                        className='check__input'  
                                        onClick={(event) => onShowPassword(event.target.parentElement.previousSibling)}>
                                    </input>
                                    <span 
                                        className='check__box'
                                        style={{backgroundImage: `url(${showPasswordImg})`}}>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='registration-form__password'>
                            <div className='registration-form__subtitle'>
                                <div>Confirm the password</div>
                                <div style={{color:errConfirmPassword}}>Password does not match</div>
                            </div>
                            <div className='registration-form__input password' >
                                <input type='password' className='input-password-registration' onChange={onChangeConfirmPassword}></input>
                                <label className='check'>
                                    <input 
                                        type="checkbox" 
                                        className='check__input'  
                                        onClick={(event) => onShowConfirmPassword(event.target.parentElement.previousSibling)}>
                                    </input>
                                    <span 
                                        className='check__box'
                                        style={{backgroundImage: `url(${showConfirmPasswordImg})`}}>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='registration-form__subtitle'>
                                <div>Email</div>
                                <div style={{color:errEmail}}>Email incorrect</div>
                            </div>
                        <input type='text' className='registration-form__input' onChange={onChangeEmail}></input>
                    </div>
                    <div>
                        <div className='registration-form__subtitle'>
                            <div>Phone</div>
                            <div style={{color:errPhone}}>Phone incorrect</div>
                        </div>
                        <input placeholder='+375(**) *** - ** - **' type='text' className='registration-form__input' onChange={onChangePhone}></input>   
                    </div>
                    <button className='registration-form__btn-send' onClick={onPostData}>SIGN UP</button>
                </div>
            </div>
            <div className='registration__blok-img'>
                <div className='registration__logo'>Trade & Invest</div>
            </div>
            {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )
};

export default RegistrationPage;