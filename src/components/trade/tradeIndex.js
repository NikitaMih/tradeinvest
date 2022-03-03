import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import './tradeStyle.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { getUserData } from '../../slices/tradeSlice';
import { useHistory } from "react-router-dom";
import CardTarde from "../cardTrade/cardTradeIndex";
import { BASECURRENCY } from '../../config/js/index';

const Trade = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const login = useSelector((state) => state.login.login);

    useEffect(() => {
        onUserData(login);
    },[]);

    const onUserData = (login) =>{
        dispatch(getUserData(login)); 
    };

    const [block, SetBlock] = useState('cryptocurrency');

    const onChangeCurrencyPage = (page) => {
        history.push(page);
        SetBlock(page);
    };

    return(
        <div className='trade'>
            <h3 className='account-title'>Trade</h3>
            <div>
                <div className='trade__switch-list'>
                    <button
                        style={{color: block === 'securities' && '#292929'}}
                        className='trade__switch' 
                        onClick={() => onChangeCurrencyPage('securities')}>Securities</button>
                    <button
                        style={{color: block === 'cryptocurrency' && '#292929'}}
                        className='trade__switch' 
                        onClick={() => onChangeCurrencyPage('cryptocurrency')}>Cryptocurrency</button>
                    <button 
                        style={{color: block === 'currency' && '#292929'}}
                        className='trade__switch' 
                        onClick={() => onChangeCurrencyPage('currency')}>Currency</button>
                </div>
                <div>
                    <Switch>
                        <Route path="/account/trade/cryptocurrency">
                            {BASECURRENCY.cryptocurrency.map((cur) => <CardTarde 
                                key={cur.name} 
                                name={cur.name} 
                                changeCurrency={cur.changeCurrency} 
                                referenceCurrency={cur.referenceCurrency} 
                                baseRate={cur.value}/>)}
                        </Route>
                        <Route path="/account/trade/securities">
                            {BASECURRENCY.securities.map((cur) => <CardTarde 
                                key={cur.name} 
                                name={cur.name} 
                                changeCurrency={cur.changeCurrency} 
                                referenceCurrency={cur.referenceCurrency} 
                                baseRate={cur.value}/>)}
                        </Route>
                        <Route path="/account/trade/currency">
                            {BASECURRENCY.currency.map((cur) => <CardTarde 
                                key={cur.name} 
                                name={cur.name} 
                                changeCurrency={cur.changeCurrency} 
                                referenceCurrency={cur.referenceCurrency} 
                                baseRate={cur.value}/>)}
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default Trade;