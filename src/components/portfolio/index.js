import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const Portfolio = () => {


    console.log(Data());

    return(
        <div className='portfolio'>
            <div>
                <div>
                    <div>Cryptocurrency</div>
                    <div>
                        <div>BTC</div>
                        <div>ETH</div>
                        <div>Litecoin</div>
                    </div>
                </div>
                <div>
                    <div>Securities</div>
                    <div>
                        <div>Apple</div>
                        <div>Facebook</div>
                        <div>Amazon</div>
                    </div>
                </div>
                <div>
                    <div>Currency</div>
                    <div>
                        <div>USD</div>
                        <div>EUR</div>
                        <div>RUB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;