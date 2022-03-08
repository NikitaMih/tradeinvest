import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tradeStyle.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { getUserData } from '../../slices/tradeSlice';
import { useHistory } from "react-router-dom";
import CardTarde from "../cardTrade/cardTradeIndex";
import { BASECURRENCY } from '../../config/js/index';
import { selectLogin } from '../../slices/loginSlice';
import { SetHistory, selectHistory } from '../../slices/tradeSlice';

const Trade = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const login = useSelector(selectLogin);
    const historyPage = useSelector(selectHistory);

    useEffect(() => {
        onUserData(login);
    },[]);

    const onUserData = (login) =>{
        dispatch(getUserData(login)); 
    };

    const onChangeCurrencyPage = (page) => {
        history.push(page);
        dispatch(SetHistory(page));
    };

    return(
        <div className='trade'>
            <h3 className='account-title'>Trade</h3>
            <div>
                <div className='trade__switch-list'>
                    <button
                        style={{color: historyPage === 'securities' && '#292929'}}
                        className='trade__switch' 
                        onClick={() => onChangeCurrencyPage('securities')}>Securities</button>
                    <button
                        style={{color: historyPage === 'cryptocurrency' && '#292929'}}
                        className='trade__switch' 
                        onClick={() => onChangeCurrencyPage('cryptocurrency')}>Cryptocurrency</button>
                    <button 
                        style={{color: historyPage === 'currency' && '#292929'}}
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