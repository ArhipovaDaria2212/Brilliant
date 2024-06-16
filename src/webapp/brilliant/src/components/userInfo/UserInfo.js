import React from 'react'

import {Link, useNavigate} from 'react-router-dom'

import "./UserInfo.scss"
import {useDispatch, useSelector} from "react-redux";
import {PROFILE, setActivePage, SETTINGS} from "../../store/slices/pageSlice";

function UserInfo({name, lastname, avatar}) {
    const activePage = useSelector(state => state.page.active)

    return (
        <div className='user_info'>
            <div className="user_info--img">
                <img src={avatar} alt="" />
            </div>
            <div className="user_info__info">
                <p className="user_info__name">{name + " " + lastname}</p>
                <div className="user_info__additional">
                    <p className="user_info__categoty">Student</p>
                    {/*<Link onClick={() => dispatch(setActivePage(SETTINGS))}*/}
                    {/*        className={`user_info__settings${activePage === SETTINGS ? '__active' : ''}`}*/}
                    {/*>настройки аватара</Link>*/}
                </div>
            </div>
        </div>
    )
}

export default UserInfo