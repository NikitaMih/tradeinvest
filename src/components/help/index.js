import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import './style.scss'
import Success from '../modalSuccess'

const Help = () => {

    const [send, SetSend] = useState(false);
    const [title, SetTitle] = useState('');
    const [text, SetText] = useState('');

    const login = useSelector((state) => state.login);

    let message = {
        id: title,
        login: login,
        title: title,
        text: text
    }

    const onChangeTitle = () => {
        SetTitle(event.target.value);
    }

    const onChangeText = () => {
        SetText(event.target.value);
    }

    const onSendMessage = () => {
            fetch("http://localhost:3001/help",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
            onSuccess();
    } 

    const onSuccess = () =>{
        SetSend(true)
        SetTitle('')
        SetText('');
        setTimeout(() => SetSend(false), 1000)
    }

    return(
        <div className='help'>
            <h2>HELP</h2>
            <div>Here you can write an appeal to us</div>
            <input 
                placeholder='Title'
                value={title}
                className='help__title'
                onChange={onChangeTitle}>
            </input>
            <input 
                placeholder='Text'
                value={text}
                className='help__text'
                onChange={onChangeText}>
            </input>
            <button onClick={onSendMessage}>SEND</button>
            {send && <Success />}
        </div>
    )
}

export default Help;