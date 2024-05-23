import React from 'react'

import pic from "./../../assets/courses/1.png"
import star from "./../../assets/icons/stars/1.png"

import "./Module.scss"
import {useDispatch} from "react-redux";
import {setActiveModule} from "../../store/slices/moduleSlice";

function Module({props}) {

    const dispatch = useDispatch();

    const moduleListener = () => {
        dispatch(setActiveModule(props))
    }

    return (
        <div className="module" onClick={() => {moduleListener()}}>
            <p className="module__num">{props.index}</p>
            <div className="module__info">
                <div className="module__title">{props.title}</div>
                <p className="module__text">{props.description}</p>
            </div>
            <div className="module__progress">
                <p className="module__progress__inner">
                    100%
                </p>
            </div>
        </div>

    )
}

export default Module