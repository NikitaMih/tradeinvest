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

const TradeWindow = ({name, rate, type, balance, postNewBalance}) => {

    const [sumReference, SetSumReference] = useState(0);
    const [sumChange, SetSumChange] = useState(0);
 
    const onCalcSum = (cost) =>{
        const count = rate * cost;
        SetSumReference(count);
        SetSumChange(cost);
    } 

    const onTrade = () => {
        const newReferenceBalance = balance - sumReference;
        const newChangeBalance = sumChange;
        if (newReferenceBalance < 0){
            alert('У вас недостаточно средств')
        }else{
            postNewBalance(newReferenceBalance, newChangeBalance)
        }

    }
    
    return(
        <div className='background-window'>
            <div className='trade-window'>
                <div className='title-modal-window'>{name}</div>
                <div>
                    <div></div>
                    <div>
                        <div>{rate} USD</div>
                        <input type='number' onChange={(event) => onCalcSum(event.target.value)}></input>
                        <div>{balance}</div>
                        <div>your need {sumReference}</div>
                        <button onClick={onTrade}>{type}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TradeWindow;