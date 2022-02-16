import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import './style.scss';
import CardWallet from "../cardWallet";
import { 
    selectUserData,
    selectUSD,
    selectEUR,
    selectRUB,
    getUserData } from '../../slices/walletSlice';

const Wallet = () => {

    const dispatch = useDispatch();

    const login = useSelector((state) => state.login.login);
    // const userData = useSelector(selectUserData);
    const USD = useSelector(selectUSD);
    const EUR = useSelector(selectEUR);
    const RUB = useSelector(selectRUB);

    
    const [currencies, SetCurrencies] = useState([
        {
            name: "EUR",
            value: EUR,
        },
        {
            name: "USD",
            value: USD,
        },
        {
            name: "RUB",
            value: RUB,
        }]);

    useEffect(() => {
        dispatch(getUserData(login))
    }, []);

    useEffect(() => {
        SetCurrencies([ 
            {name: "EUR", value: EUR},
            {name: "USD", value: USD},
            {name: "RUB", value: RUB},
        ])
    }, [EUR, USD, RUB])

    // const onUpdateCurrency = () =>{
    //     console.log(1);
    //     dispatch(getUserData(login));
    // };

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
                            // onUpdateCurrency={onUpdateCurrency} 
                            />
                    )
                })}
            </div>
        </div>
    )
};

export default Wallet;

