import React, {useEffect} from 'react'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import "./AvatarSettings.scss"

function AvatarSettings() {

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <div className='settings'>
            <button className="settings__save">Сохранить изменения</button>

        </div>
    )
}

export default AvatarSettings