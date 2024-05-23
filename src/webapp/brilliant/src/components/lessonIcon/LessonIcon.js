import React from 'react'

import { Link } from 'react-router-dom'
import closed from "./../../assets/lessons/closed.png"
import complete from "./../../assets/lessons/complete.png"
import in_progress from "./../../assets/lessons/in_progress.png"
import closed_r from "./../../assets/lessons/closed_r.png"
import complete_r from "./../../assets/lessons/complete_r.png"
import in_progress_r from "./../../assets/lessons/in_progress_r.png"

import "./LessonIcon.scss"
import {useDispatch} from "react-redux";
import {setActiveLesson} from "../../store/slices/lessonSlice";

function LessonIcon({index, mode, isLast, form}) {

    const dispatch = useDispatch()

    const lessonListener = () => {
        dispatch(setActiveLesson(index))
    }

    if (form === "round"){
        return (
            <div onClick={() => lessonListener()} className={isLast ? "lesson active" : "lesson"}>
                {mode !== "closed" &&
                    <Link to="/lesson">
                        {mode === "complete" && <img src={complete_r} alt=""/>}
                        {mode === "in_progress" && <img src={in_progress_r} alt=""/>}
                    </Link>}
                {mode === "closed" && <img src={closed_r} alt=""/>}
            </div>
        )
    } else {
        return (
            <div onClick={() => lessonListener()} className={isLast ? "lesson active" : "lesson"}>
                {mode !== "closed" &&
                    <Link to="/lesson">
                        {mode === "complete" && <img src={complete} alt=""/>}
                        {mode === "in_progress" && <img src={in_progress} alt=""/>}
                    </Link>}
                {mode === "closed" && <img src={closed} alt=""/>}
            </div>
        )
    }
}

export default LessonIcon