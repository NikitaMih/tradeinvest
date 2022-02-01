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
import TradeWindow from '../tradeWindow';

const CardTarde = ({name, changeCurrency, referenceCurrency, baseRate}) => {
    
    const login = useSelector((state) => state.login);
    
    const [rate, SetRate] = useState(baseRate);
    const [typeTrade, SetTypeTrade] = useState('');
    const [showTradeWindow, SetShowTradeWindow] = useState(false);
    const [userData, SetUserData] = useState({});
    const [balance, SetBalance] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const newRate = (rate * (Math.random() * (1.03 - 0.97) + 0.97)).toFixed(3);
            SetRate(newRate);
        }, 5000);
        return () => clearInterval(interval);
      }, []);

  
    useEffect(() => {
        onUserData();
    },[])
  
    const onUserData = () =>{
        fetch(`http://localhost:3001/profile?login=${login}`)
        .then((res) => (res.json()))
        .then((res) => SetUserData(res[0]))
        .catch(() => console.log("get err"))
    } 

    const postNewBalance = (newReferenceBalance, newChangeBalance) => {
        userData.wallet[changeCurrency] = newChangeBalance;
        userData.wallet[referenceCurrency] = newReferenceBalance;
        onPostUserData(userData);
    }

    const onPostUserData = (data) => {
        fetch(`http://localhost:3001/profile/${login}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(() => renderUpdate())
    }
    
    const onBuy = () => {
        SetTypeTrade('Buy')
        SetShowTradeWindow(true);
        SetBalance(userData.wallet[referenceCurrency]);

    }

    const onSell = () => {
        SetTypeTrade('Sell')
        SetShowTradeWindow(true);
        SetBalance(userData.wallet[referenceCurrency]);
    }
      
    return(
        <div className='trade-card'>
            <div className='trade-card__title'>
                {name}
            </div>
            <div className='trade-card__value'>
               {rate}
            </div>
            <div className='trade-card__action'>
                <div className='trade-card__action-buy' onClick={onBuy}>BUY</div>
                <div className='trade-card__action-sell' onClick={onSell}>SELL</div>
            </div>
            {showTradeWindow && <TradeWindow 
                name={name} 
                changeCurrency={changeCurrency} 
                referenceCurrency={referenceCurrency} 
                rate={rate} 
                type={typeTrade} 
                balance={balance}
                postNewBalance={postNewBalance} />}
        </div>
    )
}

export default CardTarde;