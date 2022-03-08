import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectLogin, 
    selectPassword, 
    selectError, 
    selectHistory, 
    SetLogin, 
    SetPassword,
    SetShowLogin,
    SetError,
    authorization 
} from '../../slices/loginSlice';
import './loginStyle.scss';
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const password = useSelector(selectPassword);
    const err =  useSelector(selectError);
    const address =  useSelector(selectHistory);

    const [showPasswordImg, SetShowPasswordImg] = useState('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7');

    useEffect(() => {
        history.push(address);
    }, [address]);

    const onAuthorization = (login, password) => {
        dispatch(authorization(login, password));
    }

    const onCancel = () => {
        dispatch(SetError(false));
        dispatch(SetShowLogin(false));
    }

    const onShowPassword = (input) => {
        if (input.value.length > 0){
            input.type === 'password' ? input.type = 'text' : input.type = 'password';
            input.type === 'password' ? SetShowPasswordImg('https://cdn-icons.flaticon.com/png/512/2355/premium/2355322.png?token=exp=1646655405~hmac=d64501c5786ffcda3342b962fb8ccfa7') : SetShowPasswordImg('https://cdn-icons.flaticon.com/png/512/2874/premium/2874802.png?token=exp=1646655582~hmac=4ac654f7f07e6dbc25d2ce9998dfbe33');
        }    
    }

    return(
        <div className='background-window' onKeyDown={ (event) => event.key === 'Enter' && onAuthorization(login, password) }>
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
                        onChange={ (event) => dispatch(SetLogin(event.target.value)) }>
                    </input>
                    <div className='input-modal-window password'>
                        <input 
                            type="password"
                            placeholder='password'
                            className='input-password-login'
                            onChange={ (event) => dispatch(SetPassword(event.target.value)) }>
                        </input>
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
                    <button className='btn-continue' onClick={ () => onAuthorization(login, password) }>CONTINUE</button>
                </div>
            </div>
        </div>
    )
};

export default Login;