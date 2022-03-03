import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import './helpStyle.scss';
import ModalWindow from '../modalWindow/modalWindowIndex';
import { SendMessage } from '../../slices/helpSlice';

const Help = () => {

    const dispatch = useDispatch();

    const login = useSelector((state) => state.login.login);
    const [send, SetSend] = useState(false);
    const [title, SetTitle] = useState('');
    const [text, SetText] = useState('');

    let message = {
        id: title,
        login: login,
        title: title,
        text: text
    };

    const onChangeTitle = () => {
        SetTitle(event.target.value);
    };

    const onChangeText = () => {
        SetText(event.target.value);
    };

    const onSendMessage = () => {
        dispatch(SendMessage(message));
        onSuccess();
    };;

    const onSuccess = () =>{
        SetSend(true)
        SetTitle('')
        SetText('');
        setTimeout(() => SetSend(false), 1000)
    };

    return(
        <div className='help'>
            <h3 className='account-title'>HELP</h3>
            <div className='account-description'>Here you can write an appeal to us</div>
                <div className='help-form'>
                    <div className='help-form__title'>Message</div>
                    <input
                        className='help-form__input-title' 
                        placeholder='Title'
                        value={title}
                        onChange={onChangeTitle}>
                    </input>
                    <textarea  
                        className='help-form__input-text' 
                        placeholder='Text'
                        value={text}
                        onChange={onChangeText}>
                    </textarea>
                    <div className='help-form__btn' onClick={onSendMessage}>SEND</div>
                </div>
            {send && <ModalWindow text={"Success"}/>}
        </div>
    )
};

export default Help;