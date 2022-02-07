import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectLogin, 
    selectPassword, 
    selectError, 
    selectHistory, 
    SetLogin, 
    SetPassword,
    SetShowLogin, 
    authorization 
} from '../../slices/loginSlice';
import './style.scss';
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const password = useSelector(selectPassword);
    const err =  useSelector(selectError);
    const address =  useSelector(selectHistory);

    useEffect(() => {
        history.push(address);
    }, [address]);

    const onAuthorization = (login, password) => {
        dispatch(authorization(login, password));
    }

    const onCancel = () => {
        dispatch(SetShowLogin(false));
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
                        onChange={ (event) => dispatch(SetLogin(event.target.value)) }>
                    </input>
                    <input 
                        type="password"
                        placeholder='password' 
                        className='input-modal-window'
                        onChange={ (event) => dispatch(SetPassword(event.target.value)) }>
                    </input>
                    <button className='btn-continue' onClick={ () => onAuthorization(login, password) }>CONTINUE</button>
                </div>
            </div>
        </div>
    )

}

export default Login;