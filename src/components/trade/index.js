import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";

import CardTarde from "../cardTrade";
import { BASECURRENCY } from '../../config/js/index';

const Trade = () => {

    const history = useHistory();

    const onChangeCurrencyPage = (page) => {
        history.push(page)
    };

    return(
        <div className='trade'>
            <h3 className='account-title'>Trade</h3>
            <div>
                <div className='trade__switch-list'>
                    <button className='trade__switch' onClick={() => onChangeCurrencyPage('securities')}>Securities</button>
                    <button className='trade__switch' onClick={() => onChangeCurrencyPage('cryptocurrency')}>Cryptocurrency</button>
                    <button className='trade__switch' onClick={() => onChangeCurrencyPage('currency')}>Currency</button>
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