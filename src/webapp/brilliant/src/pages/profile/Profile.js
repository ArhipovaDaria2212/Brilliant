import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import "./Profile.scss";
import './../../style/calendar.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Menu from '../../components/menu/Menu'
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import Account from "../../components/account/Account";
import {Courses} from "../courses/Courses";
import { fetchCourses } from '../../store/slices/courseSlice'
import {COURSES, PROFILE, SETTINGS} from "../../store/slices/pageSlice";
import AvatarSettings from "../../components/avatarSettings/AvatarSettings";
import {fetchAchives} from "../../store/slices/achiveSlice";


function Profile() {
    const dispatch = useDispatch()
    const activePage = useSelector(state => state.page.active)
    const courses = useSelector(state => state.course.courses);

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    return (
        <div className='profile'>
            <Menu activeItem={activePage}/>
            <div className="profile__main">
                <ProfileHeader/>
                {activePage === PROFILE && <Account courses={courses}/>}
                {activePage === COURSES && <Courses courses={courses}/>}
                {activePage === SETTINGS && <AvatarSettings />}
            </div>
        </div>
    )
}

export default Profile