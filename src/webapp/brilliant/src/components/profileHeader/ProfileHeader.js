import "./ProfileHeader.scss"

import UserInfo from "../userInfo/UserInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../store/slices/userSlice";

function ProfileHeader({ activePage }) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(fetchUserData())
    });

    return (
        <div className="profile__header">
            <UserInfo
                name={user?.firstName}
                lastname={user?.lastName}
                avatar={user?.avatar}
                activePage={activePage}
            />
            <SearchPanel/>
        </div>
    )
}

export default ProfileHeader
