import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";
import ModalWindow from '../../components/modalWindow';

const RegistrationPage = () => {

    const history = useHistory();

    const [login, SetLogin] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    const [errLogin, SetErrLogin] = useState('#292929');
    const [errPassword, SetErrPassword] = useState('#292929');
    const [errConfirmPassword, SetErrConfirmPassword] = useState('#292929');
    const [errEmail, SetErrEmail] = useState('#292929');
    const [errPhone, SetErrPhone] = useState('#292929');

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

        login.length > 0 ? SetErrLogin('#292929') : SetErrLogin('#CB4335');
        rePassword.test(password) ? SetErrPassword('#292929') : SetErrPassword('#CB4335');
        password === confirmPassword ? SetErrConfirmPassword('#292929') : SetErrConfirmPassword('#CB4335');
        reEmail.test(email) ? SetErrEmail('#292929') : SetErrEmail('#CB4335');
        rePhone.test(phone) ? SetErrPhone('#292929') : SetErrPhone('#CB4335');

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
        });
        goMain()
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
                            <input type='password' className='registration-form__input' onChange={onChangePassword}></input>
                        </div>
                        <div>
                            <div className='registration-form__subtitle'>
                                <div>Confirm the password</div>
                                <div style={{color:errConfirmPassword}}>Password does not match</div>
                            </div>
                            <input type='password' className='registration-form__input' onChange={onChangeConfirmPassword}></input>
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
                        <input type='text' className='registration-form__input' onChange={onChangePhone}></input>
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