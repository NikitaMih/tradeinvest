import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CardWallet = ({name, value, onUpdateCurrency}) => {

    const login = useSelector((state) => state.login);
    
    const [cash, SetCash] = useState(false);

    const onChangeCash = (change) => {
        let changeValue = null 
        if (change === 1){
            changeValue = event.target.previousSibling.value
        }else{
            changeValue = event.target.nextElementSibling.value * (-1)
        }
        let currencyName = event.target.parentElement.parentElement.id
        onDataCurrency(currencyName, changeValue)
    }

    const onDataCurrency = (currencyName, changeValue) =>{
        fetch(`http://localhost:3001/profile?login=${login}`)
        .then((res) => (res.json()))
        .then((res) => onChangeDataCurrency(res[0], currencyName, changeValue))
        .catch(() => console.log("get err"))
    }   

    const onChangeDataCurrency = (data, currencyName, changeValue) => {
        let newValue = data.wallet[currencyName] + +changeValue;
        if (newValue > 0){
            data.wallet[currencyName] = newValue;   
            onPostCurrency(data);
        }else{
            alert("На вашем счету не достаточно средств");
            SetCash(false);
        }
    }

    const onPostCurrency = (data) => {
        fetch(`http://localhost:3001/profile/${login}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(() => renderUpdate())
    }

    const renderUpdate = () => {
        SetCash(false);
        onUpdateCurrency();
    }

    const onVisibleInput = (value) =>{
        SetCash(value)
    }

    return (
        <div className='card-wallet' id={name}>
            <h3>{name}</h3>
            <div>{value}</div>
            <div className='btn-change'>
                {(!cash) && <button className='btn-change__cash-out' onClick={() => onVisibleInput(-1)}>CASH OUT</button>}
                {(!cash) && <button className='btn-change__cash-in'onClick={() => onVisibleInput(1)}>CASH IN</button>}

                {cash === -1 && <button className='btn-change__cash-out' onClick={() => onChangeCash(-1)}>CASH OUT</button>}
                {cash && <input></input>}
                {cash === 1 && <button className='btn-change__cash-in'onClick={() => onChangeCash(1)}>CASH IN</button>}
            </div>
        </div>
    )
}

export default CardWallet;