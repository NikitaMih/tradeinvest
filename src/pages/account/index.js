import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const AccountPage = () => {
    return(
        <div className='wrapper'>
            <header className='header'>
                <div className='logo'>T&I</div>
                <div className='exit'>exit</div>
            </header>
            <main>
                <div className='nav'>
                    <nav className='nav__list'>
                        <a>Briefcase</a>
                        <a>Trade</a>
                        <a>Wallet</a>
                        <a>Profile</a>
                        <a>Help</a>
                    </nav>
                </div>
                <div className='active-block'>
                    <div>Here you can buy any asset</div>
                    <div className='change-currency'>
                        <a>Securities</a>
                        <a>Currency</a>
                        <a>Crypto currency</a>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default AccountPage;