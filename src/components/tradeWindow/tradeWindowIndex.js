import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tradeWindowStyle.scss';
import { selectLogin } from '../../slices/loginSlice';
import {
    SetUserData,
    SetShowTradeWindow,
    selectUserData,
    selectCardName,
    selectCardRate,
    selectTypeTrade,
    selectChangeCurrency,
    postUserData,
    selectReferenceCurrency
 } from '../../slices/tradeSlice';
import LineChart from '../lineChart/lineChart';
import ModalWindow from '../modalWindow/modalWindowIndex';
import { colors } from '../../config/js';

const TradeWindow = () => {

    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const userData = useSelector(selectUserData);
    const name = useSelector(selectCardName);
    const rate = useSelector(selectCardRate);
    const type = useSelector(selectTypeTrade);
    const referenceCurrency = useSelector(selectChangeCurrency);
    const changeCurrency = useSelector(selectReferenceCurrency);

    const [sumYouNeed, SetSumYouNeed] = useState(0);
    const [cost, SetCost] = useState(0);
    const [colorBtn, SetColorBtn] = useState('');
    const [colorInput, SetColorInput] = useState(colors.light)
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    let wallet = {...userData?.wallet};

    const changeUserData = () => {
        const count = +rate * +cost;
        const balanceReference = userData.wallet[referenceCurrency];
        const balanceChange  = userData.wallet[changeCurrency];
        let newBalanceChange = 0;
        let newBalanceReference = 0;
        if (cost >= 0){
            if(type === 'BUY'){
                newBalanceChange = +balanceChange - +count;
                if(newBalanceChange >= 0){
                    newBalanceReference = +balanceReference + +cost;
                    postNewUserData(newBalanceChange, newBalanceReference, changeCurrency, referenceCurrency);
                }else{
                    showModalWindow(`Insufficient funds ${changeCurrency}`);
                }
            }
            if(type === 'SELL'){
                newBalanceReference = +balanceReference - +cost;
                if(newBalanceReference >= 0){
                    newBalanceChange = +balanceChange + +count;
                    postNewUserData(newBalanceChange, newBalanceReference, changeCurrency, referenceCurrency);
                }else{
                    showModalWindow(`Insufficient funds ${referenceCurrency}`);
                }
            }
        } else {
            SetColorInput(colors.red);
        }
    };

    const postNewUserData = (newBalanceChange, newBalanceReference, changeCurrency, referenceCurrency) => {
        wallet[changeCurrency] = +newBalanceChange.toFixed(3);
        wallet[referenceCurrency] = +newBalanceReference.toFixed(3);
        const newUserData = {...userData, wallet};
        dispatch(SetUserData(newUserData));
        dispatch(postUserData(login, newUserData));
        showModalWindow('SUCCESS'); 
    }

    const showModalWindow = (text) => {
        SetTextModal(text);
        SetShowWindow(true);
        setTimeout(() => {
            SetShowWindow(false);
            dispatch(SetShowTradeWindow(false))
        }, 1000)
    };

    const changeCost = (value) => {
        SetCost(value);
    };
    
    useEffect(() => {
        onColorBtn();
    },[]);

    useEffect(() => {
        const youNeed = rate * cost;
        type === 'BUY' ? SetSumYouNeed(youNeed) : SetSumYouNeed(cost);
    },[rate, cost]);

    const onColorBtn = () => {
        type === 'BUY' ? SetColorBtn(colors.green) : SetColorBtn(colors.red);
    };

    return(
        <div className='background-window'>
            <div className='trade-window'>
                <button className='btn-cancel'onClick={() => dispatch(SetShowTradeWindow(false))}>x</button>
                <div className='title-modal-window'>{name}</div>
                <div className='trade-window-blok'>
                    <div className='trade-window__chart'>
                        <LineChart name={name} rate={rate}/>
                    </div>
                    <div className='trade-window__info'>
                        <div className='trade-window__info-rate'>Rate: {(rate).toLocaleString('ru')} {changeCurrency}</div>
                        <label title='Value must be greater than zero'>
                            <input
                                style={{borderColor: colorInput}}
                                className='trade-window__info-input' 
                                type='number' 
                                onChange={(event) => changeCost(event.target.value)}>
                            </input>
                        </label>
                        <div className='trade-window__info-balance'>Balance: { type === 'BUY' ? wallet[changeCurrency].toLocaleString('ru') : wallet[referenceCurrency].toLocaleString('ru')} {type === 'BUY' ? changeCurrency : referenceCurrency}</div>
                        <div>Your need: {(+sumYouNeed).toLocaleString('ru')}</div>
                        <button style={{backgroundColor:colorBtn}} onClick={changeUserData}>{type}</button>
                    </div>
                </div>
            </div>
            {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )
};

export default TradeWindow;