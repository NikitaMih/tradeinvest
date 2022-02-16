import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { selectShowLogin, SetShowLogin } from '../../slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import Login from "../../components/login";

const MainPage = () => {

   const dispatch = useDispatch();

   const showLogin = useSelector(selectShowLogin);

    return (
        <div className='wrapper-main'>
            <header className='header'>
                <div className='logo'>T&I</div>
                <nav className='header__nav'>
                    <a href="#about">About</a>
                    <a href="#how-to-start">How to start</a>
                    <a href="#trade">Trade</a>
                    <a href="#contacts">Contacts</a>
                </nav>
                <div className='header__login' onClick={() => dispatch(SetShowLogin(true))}>LOG IN</div>
                <Link to="/registration" className='header__sing-up'>SING UP</Link>
            </header>
            <main>
                <div className='hero'>
                    <div className='hero__part'>
                        <h1 className='hero__title'>Trade & Invest</h1>
                        <p className='hero__description'>Trade and earn with the best platform in the financial asset market</p>
                        <div className='hero__button' onClick={() => dispatch(SetShowLogin(true))}>Invest</div>
                    </div>
                </div>
                <div className='about'>
                    <h2 className='title'>About<a name="about"></a></h2>
                    <div className='title__description'>JSC "Trade & Invest" - a reliable and fully regulated asset exchange operating within the framework of the legislation of the Republic of Belarus</div>
                    <div className='about__advantages'>Our advantages</div>
                    <div className='about__advantages-blok'>
                        <div className='about__part'>
                            <ul className='about__advantages-list'>
                                <li><span className='green-text'>2000+</span> financial assets;</li>
                                <li><span className='green-text'>Instant</span> execution of transactions;</li>
                                <li>Competitive commissions. No <span className='green-text'>hidden</span> fees;</li>
                                <li>Reliable regulation. Compliance with world <span className='green-text'>AML</span> and <span className='green-text'>KYC</span> standards;</li>
                                <li><span className='green-text'>Affiliate</span> and <span className='green-text'>referral</span> programs;</li>
                                <li>Investments in <span className='green-text'>government</span> bonds and companies.</li>
                            </ul>
                        </div>
                        <div className='about__part'>
                            <img src='https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                        </div>
                    </div>
                </div>
                <div className='how-to-start'>
                    <h2 className='title'>How to start<a name="how-to-start"></a></h2>
                    <div className='registration-cards-list'>
                        <div className='registration-card'>
                            <img className='registration-card__img' src='https://cdn-icons-png.flaticon.com/512/1277/1277010.png'/>
                            <h3 className='registration-card__title'>Registration</h3>
                            <div className='registration-card__description'>Register a personal account on the platform in which your virtual wallet will be created</div>
                        </div>
                        <div className='arrow'>
                            <img className='arrow__img' src='https://cdn-icons-png.flaticon.com/512/545/545682.png'/>
                        </div>  
                        <div className='registration-card'>
                            <img className='registration-card__img' src='https://cdn-icons-png.flaticon.com/512/493/493389.png'/>
                            <h3 className='registration-card__title'>Replenishment</h3>
                            <div className='registration-card__description'>Top up your virtual wallet with a bank card or by bank transfer</div>
                        </div>
                        <div className='arrow'>
                            <img className='arrow__img' src='https://cdn-icons-png.flaticon.com/512/545/545682.png'/>
                        </div> 
                        <div className='registration-card'>
                            <img className='registration-card__img' src='https://cdn-icons-png.flaticon.com/512/4285/4285667.png'/>
                            <h3 className='registration-card__title'>Trade</h3>
                            <div className='registration-card__description'>Choose a company, enter the required quantity to buy and click "Buy"</div>
                        </div>
                    </div>
                </div>
                <div className='trade-cards-list'>
                    <h2 className='title'>Financial Instruments<a name="trade"></a></h2>
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
                    <div className="footer__leaders"><span className='text-white'>Managing Director:</span><br/> Mihalevich Nikita</div>
                    <div className="footer__address"><span className='text-white'>Address:</span><br/> Bank of America Corporate Center, 100 North Tryon Street, Charlotte, NC 28255</div>
                </div>
            </div>
            <div className="footer__signature container">© 2022 Trade & Invest Com Limited</div>
            <a name="contacts"></a></footer>
            {showLogin && <Login/>}
        </div>
    )
};

export default MainPage;