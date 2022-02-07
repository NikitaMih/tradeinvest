import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import './style.scss';
import CardWallet from "../cardWallet";

const Wallet = () => {

    const login = useSelector((state) => state.login.login);
    
    const [currencies, SetCurrencies] = useState([
        {
            name: "EUR",
            value: "",
        },
        {
            name: "USD",
            value: "",
        },
        {
            name: "RUS",
            value: "",
        }]);

    useEffect(() => onDataCurrency(), []);

    const onUpdateCurrency = () =>{
        onDataCurrency();
    };

    const onDataCurrency = () =>{
        fetch(`http://localhost:3001/profile?login=${login}`)
        .then((res) => res.json())
        .then((res) => onChangeCurrency(res[0]))
        .catch(() => console.log("err"))
    };

    const onChangeCurrency = (data) => {
        SetCurrencies([ 
            {name: "EUR", value: data.wallet.EUR},
            {name: "USD", value: data.wallet.USD},
            {name: "RUS", value: data.wallet.RUS},
        ])
    };

    return(
        <div className='wallet'>
            <h3 className='account-title'>Wallet</h3>
            <div className='account-description'>Here you can top up your wallet</div>
            <div className='wallet-list'>
                {currencies.map((item) => {
                    return(
                        <CardWallet 
                            key={item.name} 
                            name={item.name} 
                            value={item.value}
                            onUpdateCurrency={onUpdateCurrency} 
                            />
                    )
                })}
            </div>
        </div>
    )
};

export default Wallet;

