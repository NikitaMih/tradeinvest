import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './changePasswordStyle.scss';
import { selectLogin } from '../../slices/loginSlice';
import { 
    selectUserData,
    SetShowChangePasswordWindow,
    PostProfileData } from '../../slices/profileSlice';
import ModalWindow from '../modalWindow/modalWindowIndex';
import { colors } from '../../config/js';

const ChangePassword = () => {

    const dispatch = useDispatch();

    const userData = useSelector(selectUserData);
    const login = useSelector(selectLogin);
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [errPassword, SetErrPassword] = useState(colors.dark);
    const [errConfirmPassword, SetErrConfirmPassword] = useState(colors.dark);
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    const onChangePassword = (event) => {
        SetPassword(event.target.value);
    };

    const onChangeConfirmPassword = (event) => {
        SetConfirmPassword(event.target.value);
    };

    const onSavePassword = () => {
        const rePassword = /^[a-zA-Z0-9]{6,}$/i; 
        rePassword.test(password) ? SetErrPassword('#292929') : SetErrPassword(colors.red);
        password === confirmPassword ? SetErrConfirmPassword('#292929') : SetErrConfirmPassword(colors.red);
        if (rePassword.test(password) && password === confirmPassword){
            putNewPassword();
        }
    };

    const putNewPassword = () => {
        const newPassword = document.getElementById('newPassword').value;
        const newData = {...userData, password: newPassword};
        successChange();
        dispatch(PostProfileData(login, newData));
        
    };

    const successChange = () => {
        SetTextModal('PASSWORD CHANGED');
        SetShowWindow(true);
        setTimeout(() => {
            dispatch(SetShowChangePasswordWindow(false));
            SetShowWindow(false);
        }, 1000);
    };

    return(
        <div className='background-window'>
            <div className='change-window'>
                <button className='btn-cancel'onClick={() => dispatch(SetShowChangePasswordWindow(false))}>x</button>
                <div className='title-modal-window'>Change password</div>
                <div className='registration-form__password'>
                        <div>
                            <div className='registration-form__subtitle'>
                                <div>Password</div>
                                <div style={{color:errPassword}}>Password does not meet security requirements</div>
                            </div>
                            <input id='newPassword' type='password' className='registration-form__input' onChange={onChangePassword}></input>
                        </div>
                        <div>
                            <div className='registration-form__subtitle'>
                                <div>Confirm the password</div>
                                <div style={{color:errConfirmPassword}}>Password does not match</div>
                            </div>
                            <input type='password' className='registration-form__input' onChange={onChangeConfirmPassword}></input>
                        </div>
                        <button className='registration-form__btn-send' onClick={onSavePassword}>SAVE</button>
                    </div>
            </div>
            {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )
};

export default ChangePassword;