import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
    SetUserData,
    SetShowTradeWindow,
    selectUserData,
    selectCardName,
    selectCardRate,
    selectTypeTrade,
    selectChangeCurrency,
    selectNewData,
    selectReferenceCurrency,
    postUserData } from '../../slices/tradeSlice';
import LineChart from '../lineChart';
import ModalWindow from '../modalWindow';

const TradeWindow = () => {

    const dispatch = useDispatch();

    const userData = useSelector(selectUserData);
    const name = useSelector(selectCardName);
    const rate = useSelector(selectCardRate);
    const type = useSelector(selectTypeTrade);
    const referenceCurrency = useSelector(selectChangeCurrency);
    const changeCurrency = useSelector(selectReferenceCurrency);

    const [sumReference, SetSumReference] = useState(0);
    const [cost, SetCost] = useState(0);
    const [colorBtn, SetColorBtn] = useState('');
    const [showWindow, SetShowWindow] = useState(false);
    const [textModal, SetTextModal] = useState('');

    let wallet = {...userData?.wallet};

    const changeUserData = () => {
        const count = rate * cost;
        const balanceReference = userData.wallet[referenceCurrency];
        const balanceChange  = userData.wallet[changeCurrency];
        if(type === 'BUY'){
            let newBalanceChange = 0;
            let newBalanceReference = 0;
            newBalanceChange = balanceChange - count;
            if(newBalanceChange >= 0){
                newBalanceReference = balanceReference + cost;
                wallet[changeCurrency] = +newBalanceChange;
                wallet[referenceCurrency] = +newBalanceReference;
                const newUserData = {...userData, wallet}
                dispatch(SetUserData(newUserData));
                showModalWindow('SUCCESS');
            }else{
                showModalWindow(`На балансе недостаточно ${changeCurrency}`);
            }
        }
        if(type === 'SELL'){
            let newBalanceChange = 0;
            let newBalanceReference = 0;
            newBalanceReference = balanceReference - cost;
            if(newBalanceReference >= 0){
                newBalanceChange = +balanceChange + +count;
                wallet[changeCurrency] = +newBalanceChange.toFixed(2);
                wallet[referenceCurrency] = +newBalanceReference.toFixed(2);
                const newUserData = {...userData, wallet}
                dispatch(SetUserData(newUserData));
                showModalWindow('SUCCESS');
            }else{
                showModalWindow(`На балансе недостаточно ${referenceCurrency}`);
            }
        }
    
    };

    const showModalWindow = (text) => {
        SetTextModal(text);
        SetShowWindow(true);
        setTimeout(() => {
            SetShowWindow(false);
        }, 1000)
    }

    const changeCost = (value) => {
        SetCost(value);
    }
    
    useEffect(() => {
        onColorBtn();
    },[]);

    const onColorBtn = () => {
        type === 'BUY' ? SetColorBtn('#1D8348') : SetColorBtn('#CB4335');
    }

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
                        <div className='trade-window__info-rate'>Rate: {rate} {changeCurrency}</div>
                        <input className='trade-window__info-input' type='number' onChange={(event) => changeCost(event.target.value)}></input>
                        <div className='trade-window__info-balance'>Balance: { type === 'BUY' ? wallet[changeCurrency] : wallet[referenceCurrency]} {type === 'BUY' ? changeCurrency : referenceCurrency}</div>
                        <div>Your need: {sumReference}</div>
                        <button style={{backgroundColor:colorBtn}} onClick={changeUserData}>{type}</button>
                    </div>
                </div>
            </div>
            {showWindow && <ModalWindow text={textModal}/>}
        </div>
    )

}

export default TradeWindow;