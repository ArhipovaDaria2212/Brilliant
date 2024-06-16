import React from 'react'

import pic_close from "./../../assets/achives/close.svg"
import pic_open from "./../../assets/achives/open.png"

import "./AchiveCard.scss"

function AchiveCard({slide}) {

    if (slide.open) return (
        <div className='achive_card open'>
            <p className="count"></p>
            <img src={pic_open} alt="" className="achive_card--img"/>
            <div className="achive_card__info">
                <h2 className='title'>{slide && slide.title}</h2>
                {slide && <p className='text'>{slide.subtitle || ""}</p>}
            </div>

        </div>
    )
    else return (
        <div className='achive_card'>
            <p className="count">0/{slide.toAchive}</p>
            <img src={pic_close} alt="" className="achive_card--img"/>
            <div className="achive_card__info">
                <h2 className='title'>{slide && slide.title}</h2>
                {slide && <p className='text'>{slide.subtitle || ""}</p>}
            </div>

            </div>
        )
}

export default AchiveCard