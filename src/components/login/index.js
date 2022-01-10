import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const LonIn = () => {
    return(
        <div className='background-window'>
            <div className='login-window'>
                <div className='login'>
                    <div className='title-modal-window'>Trade & Invest</div>
                    <div className='subtitle-modal-window'>Login</div>
                    <input className='input-modal-window'></input>
                    <input className='input-modal-window'></input>
                    <div className='btn-modal'>
                        <button className='btn-modal__continue'>CONTINUE</button>
                        <button className='btn-modal__cancel'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LonIn;