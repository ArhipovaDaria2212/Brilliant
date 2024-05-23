import React from 'react'

import search from "./../../assets/profile_header/1.png"

import "./SearchPanel.scss"

function SearchPanel() {
    return (
        <div className='search_panel'>
            <form className='form'>
                <input className='input' type="text" placeholder='Поиск' />
                <button className='btn'>
                    <img src={search} alt="" />
                </button>
            </form>
            <button className='notify' />
            <button className='dark_mode' />
        </div>
    )
}

export default SearchPanel