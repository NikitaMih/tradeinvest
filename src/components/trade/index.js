import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";

import CardTarde from "../cardTrade"

const Trade = () => {

    const BASECURRENCY = {
        cryptocurrency: [
           {
            name: 'BTC',
            changeCurrency: 'BTC',
            referenceCurrency: 'USD',
            value: '42123.432'
           },
           {
            name: 'ETH',
            changeCurrency: 'ETH',
            referenceCurrency: 'USD',
            value: '2.362'
           },
           {
            name: 'Litecoin',
            changeCurrency: 'Litecoin',
            referenceCurrency: 'USD',
            value: '102.128'
           },
        ],
        securities: [
            {
             name: 'Apple',
             changeCurrency: 'Apple',
             referenceCurrency: 'USD',
             value: '156.569'
            },
            {
             name: 'Facebook',
             changeCurrency: 'Facebook',
             referenceCurrency: 'USD',
             value: '299.842'
            },
            {
             name: 'Amazon',
             changeCurrency: 'Amazon',
             referenceCurrency: 'USD',
             value: '2777.128'
            },
         ],
         currency: [
            {
             name: 'USD/EUR',
             changeCurrency: 'USD',
             referenceCurrency: 'EUR',
             value: '0.88'
            },
            {
             name: 'USD/RUB',
             changeCurrency: 'USD',
             referenceCurrency: 'RUB',
             value: '78.925'
            },
            {
             name: 'EUR/RUB',
             changeCurrency: 'EUR',
             referenceCurrency: 'RUB',
             value: '89.391'
            },
         ]

    }

    const history = useHistory();

    const onChangeCurrencyPage = (page) => {
        history.push(`${page}`)
    }

    return(
        <div className='trade'>
            <h3>Trade</h3>
            <div>
                <div>
                    <button onClick={() => onChangeCurrencyPage('cryptocurrency')}>Cryptocurrency</button>
                    <button onClick={() => onChangeCurrencyPage('securities')}>Securities</button>
                    <button onClick={() => onChangeCurrencyPage('currency')}>Currency</button>
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
}

export default Trade;