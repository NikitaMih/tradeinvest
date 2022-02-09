import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import './style.scss';
import TradeWindow from '../tradeWindow';
import {
    SetCardName, 
    SetCardRate,
    SetTypeTrade,
    SetChangeCurrency,
    SetReferenceCurrency, 
    SetShowTradeWindow,
    selectUserData,
    selectShowTradeWindow, 
    } from '../../slices/tradeSlice';

const CardTarde = ({name, changeCurrency, referenceCurrency, baseRate}) => {

    const dispatch = useDispatch();

    const showTradeWindow = useSelector(selectShowTradeWindow);
    
    const [rate, SetRate] = useState(baseRate);

    useEffect(() => {
        const interval = setInterval(() => {
            const newRate = (rate * (Math.random() * (1.03 - 0.97) + 0.97)).toFixed(3);
            SetRate(newRate);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    
    const onBuySell = (btnText) => {
        dispatch(SetTypeTrade(btnText));
        dispatch(SetCardName(name));
        dispatch(SetCardRate(rate));
        dispatch(SetChangeCurrency(changeCurrency));
        dispatch(SetReferenceCurrency(referenceCurrency));
        dispatch(SetShowTradeWindow(true));
    };
      
    return(
        <div className='trade-card'>
            <div className='trade-card__title'>
                {name}
            </div>
            <div className='trade-card__value'>
               {rate}
            </div>
            <div className='trade-card__action'>
                <div className='trade-card__action-buy' onClick={ () => onBuySell('BUY')}>BUY</div>
                <div className='trade-card__action-sell' onClick={ () => onBuySell('SELL') }>SELL</div>
            </div>
            {showTradeWindow && <TradeWindow/>}
        </div>
    )
};

export default CardTarde;