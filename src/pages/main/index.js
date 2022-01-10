import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const MainPage = () => {

   const cards = [{card: 'BTC', value: 42686.70}, {card: 'Apple', value: 174.92}, {card: 'EYR/USD', value: 1.13}]

    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='logo'>T&I</div>
                <nav className='header__nav'>
                    <a>About</a>
                    <a>How start</a>
                    <a>Trade</a>
                    <a>Contacts</a>
                </nav>
                <div className='header__login'>LOG IN</div>
                <div className='header__sing-up'>SING UP</div>
            </header>
            <main>
                <div className='hero'>
                    <div className='hero__part'>
                        <h1 className='hero__title'>Trade & Invest</h1>
                        <p className='hero__description'>Trade and earn with the best platform in the financial asset market</p>
                        <div className='hero__button'>Invest</div>
                    </div>
                    <div></div>
                </div>
                <div className='about'>
                    <h2 className='title'>About</h2>
                    <div className='title__description'>JSC "Trade & Invest" - a reliable and fully regulated asset exchange operating within the framework of the legislation of the Republic of Belarus</div>
                    <div className='about__advantages'>Our advantages</div>
                    <div>
                        <div className='about__part'>
                            <ul className='about__advantages-list'>
                                <li>2000+ financial assets</li>
                                <li>Instant execution of transactions</li>
                                <li>Competitive commissions. No hidden fees</li>
                                <li>Reliable regulation. Compliance with world AML and KYC standards</li>
                                <li>Affiliate and referral programs</li>
                                <li>Investments in government bonds and companies</li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='title'>How to start</h2>
                    <div className='registration-cards-list'>
                        <div className='registration-card'>
                        </div>
                        <div>&#10132;</div>
                        <div className='registration-card'>
                            <div></div>
                            <div></div>
                        </div>
                        <div>&#10132;</div>
                        <div className='registration-card'>

                        </div>
                    </div>
                </div>
                <div className='trade-cards-list'>
                    <h2 className='title'>Financial Instruments</h2>
                    <div className='title__description'>Here you can choose and purchase the most profitable and acceptable financial instrument just for you</div>
                    <div className='trade-card'>
                        <div className='trade-card__title'>
                            BTC
                        </div>
                        <div className='trade-card__value'>
                            42686.70
                        </div>
                        <div className='trade-card__action'>
                            <div className='trade-card__action-buy'>BUY</div>
                            <div className='trade-card__action-sell'>SELL</div>
                        </div>
                    </div>
                    <div className='trade-card'>
                        <div className='trade-card__title'>
                            Apple
                        </div>
                        <div className='trade-card__value'>
                            174.92
                        </div>
                        <div className='trade-card__action'>
                            <div className='trade-card__action-buy'>BUY</div>
                            <div className='trade-card__action-sell'>SELL</div>
                        </div>
                    </div>
                    <div className='trade-card'>
                        <div className='trade-card__title'>
                            EYR/USD
                        </div>
                        <div className='trade-card__value'>
                            1.13
                        </div>
                        <div className='trade-card__action'>
                            <div className='trade-card__action-buy'>BUY</div>
                            <div className='trade-card__action-sell'>SELL</div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer'>
            <div className="footer__main-information container">
                <div className="footer__main-information__part">
                    <a href="" className="logo">T&I</a>                
                </div>
                <div className="footer__main-information__part container">
                    <div className="footer__leaders"><span>Managing Director</span> Mihalevich Nikita</div>
                    <div className="footer__address"><span>Address</span> Bank of America Corporate Center, 100 North Tryon Street, Charlotte, NC 28255</div>
                </div>
            </div>
            <div className="footer__signature container">© 2022 Trade & Invest Com Limited</div>
            </footer>
        </div>

    )
}

export default MainPage;