import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cardWalletStyle.scss';
import ModalWindow from '../modalWindow/modalWindowIndex';
import { selectLogin } from '../../slices/loginSlice';
import { selectUserData, PostCurrency } from '../../slices/walletSlice';

const CardWallet = ({name, value}) => {

    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const userData = useSelector(selectUserData);
    const wallet = {...userData.wallet};
    
    const [cash, SetCash] = useState(false);
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    const onChangeCash = (change) => {
        let changeValue = null; 
        let input = document.getElementById('value');
        if (change === 1){
            changeValue = input.value;
        }else{
            changeValue = input.value * (-1);
        }
        let currencyName = event.target.parentElement.parentElement.id;
        let newWalletValue = wallet[currencyName] + +changeValue;
        if (newWalletValue >= 0){
            SetCash(false);
            wallet[currencyName] = newWalletValue;
            const newUserData = {...userData, wallet};
            dispatch(PostCurrency(login, newUserData));
        }else{
            showModalWindow('Insufficient funds');
            SetCash(false);
        }
    };

    const onVisibleInput = (value) =>{
        SetCash(value);
    };

    const showModalWindow = (text) => {
        SetTextModal(text);
        SetShowWindow(true);
        setTimeout(() => {
            SetShowWindow(false);
        }, 1000);
    };

    return (
        <div className='card-wallet' id={name}>
            <h3>{name}: {(value).toLocaleString('ru')}</h3>
            <div className='btn-change'>
                {(!cash) && <button className='btn-change__cash-out' onClick={() => onVisibleInput(-1)}>CASH OUT</button>}
                {(!cash) && <button className='btn-change__cash-in'onClick={() => onVisibleInput(1)}>CASH IN</button>}

                {cash === -1 && <button className='btn-change__cash-out' onClick={() => onChangeCash(-1)}>CASH OUT</button>}
                {cash && <label><input id='value' type="number" className='btn-change__input'></input><span className='btn-change__cancel' onClick={() => onVisibleInput(false)}>x</span></label>}
                {cash === 1 && <button className='btn-change__cash-in'onClick={() => onChangeCash(1)}>CASH IN</button>}
            </div>
            {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )
};

export default CardWallet;