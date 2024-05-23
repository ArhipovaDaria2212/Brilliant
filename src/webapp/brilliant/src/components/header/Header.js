import React from 'react'

import logo from "./../../assets/icons/logo-pink.svg"
import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className="header__menu">
                        <li className="header__menu__item">
                            <Link to='/about' className="menu__item--link">О нас</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to='/auth' className="menu__item--link">Бесплатно</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to='/auth' className="menu__item--link">Курсы</Link>
                        </li>
                    </ul>
                    <ul className="header__login">
                        <li className="header__login__item">
                            <Link to='/auth' className="header__login__item--link btn--fill">Sign up</Link>
                        </li>
                        <li className="header__login__item ">
                            <Link to="/login" className="header__login__item--link btn--outline">Log in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header