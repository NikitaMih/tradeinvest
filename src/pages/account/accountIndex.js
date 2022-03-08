import React, { useState } from 'react';
import './accountStyle.scss';
import {
    BrowserRouter as Router,
    Switch,
    Link,
  } from "react-router-dom";
import { colors } from '../../config/js';

import Portfolio from '../../components/portfolio/portfolioIndex';
import Trade from '../../components/trade/tradeIndex';
import Wallet from "../../components/wallet/walletIndex";
import Profile from '../../components/profile/profileIndex';
import Help from '../../components/help/helpIndex';

const AccountPage = () => {

    const [activeBlok, SetActiveBlok] = useState('Trade');

    const onExit = () => {
        localStorage.clear();
        location.replace('http://localhost:3000/');
    };

    const onChangeActiveBlok = (blok) => {
        SetActiveBlok(blok);
    };

    return(
        <Router>
            <div className='wrapper'>
                <header className='header-account'>
                    <div className='logo'>T&I</div>
                    <img className='exit' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-logout-ui-dreamstale-lineal-dreamstale.png" onClick={onExit}/>
                </header>
                <main className='account-main'>
                    <div className='nav'>
                        <nav className='nav__list'>
                            <Link 
                                to="/account/portfolio"
                                style={{color: activeBlok === 'Portfolio' && colors.grey}}
                                onClick={() => onChangeActiveBlok('Portfolio')}>Portfolio</Link>
                            <Link 
                                to="/account/trade/cryptocurrency"
                                style={{color: activeBlok === 'Trade' && colors.grey}}
                                onClick={() => onChangeActiveBlok('Trade')}>Trade</Link>
                            <Link 
                                to="/account/wallet"
                                style={{color: activeBlok === 'Wallet' && colors.grey}}
                                onClick={() => onChangeActiveBlok('Wallet')}>Wallet</Link>
                            <Link 
                                to="/account/profile"
                                style={{color: activeBlok === 'Profile' && colors.grey}}
                                onClick={() => onChangeActiveBlok('Profile')}>Profile</Link>
                            <Link 
                                to="/account/help"
                                style={{color: activeBlok === 'Help' && colors.grey}}
                                onClick={() => onChangeActiveBlok('Help')}>Help</Link>
                        </nav>
                    </div>
                    <div className='account-function-blok'>
                        <Switch>
                            <Router path="/account/portfolio">
                                <Portfolio />
                            </Router>
                            <Router path="/account/trade/cryptocurrency">
                                <Trade />
                            </Router>
                            <Router path="/account/wallet">
                                <Wallet />
                            </Router>
                            <Router path="/account/profile">
                                <Profile />
                            </Router>
                            <Router path="/account/help">
                                <Help />
                            </Router>
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    )
};

export default AccountPage;