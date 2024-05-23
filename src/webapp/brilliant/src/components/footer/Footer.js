import React from 'react'
import { Link } from 'react-router-dom'

import logo from "./../../assets/icons/logo.png"
import social_media_1 from "./../../assets/icons/social_media/1.png"
import social_media_2 from "./../../assets/icons/social_media/2.png"
import social_media_3 from "./../../assets/icons/social_media/3.png"
import social_media_4 from "./../../assets/icons/social_media/4.png"
import partners_1 from "./../../assets/icons/partners/1.png"
import partners_2 from "./../../assets/icons/partners/2.png"
import partners_3 from "./../../assets/icons/partners/3.png"

import "./Footer.scss"


function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__inner">
                    <div className="footer__menu">
                        <div className="footer__menu--nav">
                            <Link to='/' className="logo">
                                <img src={logo} alt="Brilliant" />
                            </Link>
                            <Link to='/auth' className="footer__menu--btn btn--fill">Sign up</Link>
                            <Link to='/login' className="footer__menu--btn btn--outline">Log in</Link>
                        </div>
                        <div className="footer__menu--networks">
                            <a href="https://www.instagram.com/" className="logo">
                                <img src={social_media_1} alt="Brilliant" />
                            </a>
                            <a href="https://www.facebook.com/" className="logo">
                                <img src={social_media_2} alt="Brilliant" />
                            </a>
                            <a href="https://ru.linkedin.com/" className="logo">
                                <img src={social_media_3} alt="Brilliant" />
                            </a>
                            <a href="https://www.twitter.com/" className="logo">
                                <img src={social_media_4} alt="Brilliant" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__info">
                        <div className="footer__info__item">
                            <div className="footer__info__item--p"><Link to='/'>Положение об обработке персональных данных</Link></div>
                            <div className="footer__info__item--p"><Link to='/'>Связаться со службой поддержки</Link></div>
                            <div className="footer__info__item--p">Партнеры:</div>
                            <div className="footer__info__item--p footer__info__item--partners">
                                <img src={partners_1} alt="Алгоритмика" className="footer__info__item--img" />
                                <img src={partners_2} alt="Hexlet" className="footer__info__item--img" />
                                <img src={partners_3} alt="Otus" className="footer__info__item--img" />
                            </div>
                        </div>
                        <div className="footer__info__item">
                            <div className="footer__info__item--p"><Link to='/about'>О нас</Link></div>
                            <div className="footer__info__item--p"><Link to='/auth'>Курсы</Link></div>
                            <div className="footer__info__item--p"><Link to='/auth'>Цены</Link></div>
                            <div className="footer__info__item--p"><Link to='/about'>Отзывы</Link></div>
                        </div>
                        <div className="footer__info__item">
                            <div className="footer__info__item--form">
                                <form action="POST">
                                    <label htmlFor="email">Подпишитесь на нашу рассылку, чтобы получать свежие новости</label>
                                    <div className="email">
                                        <input type="email" placeholder="example@gmail.com" name="email" id="email" />
                                        <button type="submit">Подписаться</button>
                                    </div>
                                    <div className="checkbox">
                                        <label htmlFor="checkbox">нажимая “подписаться” я даю согласие на сбор и обработку личных данных</label>
                                        <input type="checkbox" id="checkbox" name="checkbox" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        © 2021 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are trademarks of Brilliant Worldwide, Inc.
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer