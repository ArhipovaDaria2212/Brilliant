import React from 'react'

import { Link } from 'react-router-dom'

import "./UserInfo.scss"
import {useDispatch} from "react-redux";
import {setActivePage, SETTINGS} from "../../store/slices/pageSlice";

function UserInfo({name, lastname, avatar, activePage}) {

    const dispatch = useDispatch();

    return (
        <div className='user_info'>
            <div className="user_info--img">
                <img src={avatar} alt="" />
            </div>
            <div className="user_info__info">
                <p className="user_info__name">{name + " " + lastname}</p>
                <div className="user_info__additional">
                    <p className="user_info__categoty">Student</p>
                    <Link onClick={() => dispatch(setActivePage(SETTINGS))}
                            className={`user_info__settings${activePage === SETTINGS ? '__active' : ''}`}
                    >настройки аватара</Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfo