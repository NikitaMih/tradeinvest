import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const ModalWindow = ({text}) => {
    return(
        <div className='background-window'>
            <div className='modal-text'>
                <div>{text}</div>
            </div>
        </div>

    )
}

export default ModalWindow;