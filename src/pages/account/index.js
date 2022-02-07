import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import Portfolio from '../../components/portfolio';
import Trade from '../../components/trade';
import Wallet from "../../components/wallet";
import Profile from '../../components/profile';
import Help from '../../components/help';

const AccountPage = () => {

    const onExit = () => {
        location.replace('http://localhost:3000/');
    };

    return(
        <Router>
            <div className='wrapper'>
                <header className='header-account'>
                    <div className='logo'>T&I</div>
                    <div className='exit' onClick={onExit}>exit</div>
                </header>
                <main className='account-main'>
                    <div className='nav'>
                        <nav className='nav__list'>
                            <Link to="/account/portfolio">Portfolio</Link>
                            <Link to="/account/trade/cryptocurrency">Trade</Link>
                            <Link to="/account/wallet">Wallet</Link>
                            <Link to="/account/profile">Profile</Link>
                            <Link to="/account/help">Help</Link>
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