import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './helpStyle.scss';
import ModalWindow from '../modalWindow/modalWindowIndex';
import { SendMessage } from '../../slices/helpSlice';
import { selectLogin } from '../../slices/loginSlice';

const Help = () => {

    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const [send, SetSend] = useState(false);
    const [title, SetTitle] = useState('');
    const [text, SetText] = useState('');
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

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
        if(title.length > 0 && text.length > 0){
            dispatch(SendMessage(message));
            onSuccess();
        }else{
            showModalWindow('Please, complete all fields');
        }
    };

    const showModalWindow = (text) => {
        SetTextModal(text);
        SetShowWindow(true);
        setTimeout(() => {
            SetShowWindow(false);
        }, 1000);
    };

    const onSuccess = () =>{
        SetTitle('');
        SetText('');
        showModalWindow('SUCCESS');
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
                {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )
};

export default Help;