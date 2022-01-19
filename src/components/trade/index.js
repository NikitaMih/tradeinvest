import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import CardWallet from "../cardWallet"

const Trade = () => {

    const [tool, SetTool] = useState('Currency')

    return(
        <div className='trade'>
            <h3>Trade</h3>
            <div>
                <button>Cryptocurrency</button>
                <button>Securities</button>
                <button>Currency</button>
            </div>
        </div>
    )
}

export default Trade;