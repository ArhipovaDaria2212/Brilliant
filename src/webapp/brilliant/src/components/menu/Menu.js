import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from "./../../assets/icons/logo-pink.svg"
import menu_1 from "./../../assets/menu/profile.svg"
import menu_2 from "./../../assets/menu/courses.svg"
import menu_3 from "./../../assets/menu/classmates.svg"
import menu_4 from "./../../assets/menu/support.svg"

import './Menu.scss'
import {useDispatch} from "react-redux";
import {COURSES, PROFILE, setActivePage} from "../../store/slices/pageSlice";

function Menu({ activeItem }) {

    const dispatch = useDispatch()

    return (
        <div className='menu'>
            <img className='logo' src={logo} />
            <ul className="menu__list">
                <li className="menu__list__item">
                    <button onClick={() => dispatch(setActivePage(PROFILE))}
                          className={`menu__list__item--link ${activeItem === PROFILE ? 'active' : ''}`}>
                        <img src={menu_1} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Профиль</p>
                    </button>
                </li>
                <li className="menu__list__item">
                    <button onClick={() => dispatch(setActivePage(COURSES))}
                          className={`menu__list__item--link ${activeItem === COURSES ? 'active' : ''}`}>
                        <img src={menu_2} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Курсы</p>
                    </button>
                </li>
                {/*<li className="menu__list__item">*/}
                {/*    <button onClick={() => onItemClick('classmates')}*/}
                {/*          className={`menu__list__item--link ${activeItem === 'classmates' ? 'active' : ''}`}>*/}
                {/*        <img src={menu_3} alt="" className="menu__list__item--img" />*/}
                {/*        <p className="menu__list__item--p">Однокурсники</p>*/}
                {/*    </button>*/}
                {/*</li>*/}
                {/*<li className="menu__list__item">*/}
                {/*    <button onClick={() => onItemClick('support')}*/}
                {/*          className={`menu__list__item--link ${activeItem === 'support' ? 'active' : ''}`}>*/}
                {/*        <img src={menu_4} alt="" className="menu__list__item--img" />*/}
                {/*        <p className="menu__list__item--p">Поддержка</p>*/}
                {/*    </button>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}

export default Menu