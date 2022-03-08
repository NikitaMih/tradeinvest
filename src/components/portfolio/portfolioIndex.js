import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './portfolioStyle.scss';
import PieChart from '../pieChart/pieChart';
import { selectLogin } from '../../slices/loginSlice';
import { selectUserData, getUserData } from '../../slices/portfolioSlice';
import { BASERATE } from '../../config/js/index';

const Portfolio = () => {

    const dispatch = useDispatch();
    const userData = useSelector(selectUserData); 

    const login = useSelector(selectLogin);

    const [data, SetData] = useState([]);

    useEffect(() => {
        dispatch(getUserData(login));
    },[]);

    useEffect(() => {
        SetData(calcDataPieChart());
    },[userData]);

    let calcCur = {
      BTC: 0,
      ETH: 0,
      Litecoin: 0,
      Apple: 0,
      Facebook: 0,
      Amazon: 0,
      EUR: 0,
      RUB: 0,
      USD: 0,
   };

    const calcDataPieChart = () => {
        for(let key in calcCur){
            calcCur[key] = userData?.wallet?.[key] * +BASERATE[key];
        }
        const cryptocurrencySum = calcCur.BTC + calcCur.ETH + calcCur.Litecoin;
        const securitiesSum = calcCur.Apple + calcCur.Facebook + calcCur.Amazon;
        const currencySum = calcCur.EUR + calcCur.RUB + calcCur.USD;
        const totalAmount = cryptocurrencySum + securitiesSum + currencySum;
        const percCryptocurrency = (cryptocurrencySum/totalAmount) * 100;
        const percSecurities = (securitiesSum/totalAmount) * 100;
        const percCurrency = (currencySum/totalAmount) * 100;
        return [percCryptocurrency, percSecurities, percCurrency];
    };

    return(
        <div className='portfolio'>
            <div className="pie-chart">
                <PieChart Data={data}/>
            </div>
            <div className='currency'>
                <div className='currency__blok'>
                    <h3 className='currency__title'>Cryptocurrency</h3>
                    <ul className='currency__list'>
                        <li>BTC: {(userData?.wallet?.BTC)?.toLocaleString('ru')}</li>
                        <li>ETH: {(userData?.wallet?.ETH)?.toLocaleString('ru')}</li>
                        <li>Litecoin: {(userData?.wallet?.Litecoin)?.toLocaleString('ru')}</li>
                    </ul>
                </div>
                <div className='currency__blok'>
                    <h3 className='currency__title'>Securities</h3>
                    <ul className='currency__list'>
                        <li>Apple: {(userData?.wallet?.Apple)?.toLocaleString('ru')}</li>
                        <li>Facebook: {(userData?.wallet?.Facebook)?.toLocaleString('ru')}</li>
                        <li>Amazon: {(userData?.wallet?.Amazon)?.toLocaleString('ru')}</li>
                    </ul>
                </div>
                <div className='currency__blok'>
                    <h3 className='currency__title'>Currency</h3>
                    <ul  className='currency__list'>
                        <li>USD: {(userData?.wallet?.USD)?.toLocaleString('ru')}</li>
                        <li>EUR: {(userData?.wallet?.EUR)?.toLocaleString('ru')}</li>
                        <li>RUB: {(userData?.wallet?.RUB)?.toLocaleString('ru')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;