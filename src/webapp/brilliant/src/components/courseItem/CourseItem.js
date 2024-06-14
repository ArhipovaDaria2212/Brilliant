import React from 'react'

import star from "./../../assets/icons/stars/1.png"

import "./CourseItem.scss"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setActiveCourse} from "../../store/slices/courseSlice";

function CourseItem({id, title, text, level, time, hasStar, picture}) {

    const [showDetails, setShowDetails] = React.useState(false);
    const dispatch = useDispatch();

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toCourse = (course) => {
        dispatch(setActiveCourse(course))
    }

    return (
        <div className="course_item__wrapper" onClick={toggleDetails}>
            <div className='course_item' >
                <img src={picture} alt="icon" className="course_item--img"/>
                <div className="course_item__info">
                    <h3 className="title">{ title }</h3>
                    <p className="text">{ text }</p>
                </div>
                <div className="course_item__progress">
                    <div className="favotite">
                        <img src={star} alt=""/>
                    </div>
                </div>
            </div>
            {showDetails && (
                <div className="course_item__additional_info__wrapper">
                    <div className="course_item__additional_info">
                        <div className="course_item__info">Примерное время на прохождение
                            курса: <span>{time} м</span></div>
                        <div className="course_item__info">Уровень:
                            {level==="start" && <span> для начинающих</span>}
                            {level==="medium" && <span> средний</span>}
                            {level==="hard" && <span> для продвинутых</span>}
                        </div>
                        {/*<div className="course_item__info">Количество модулей: <span>21</span></div>*/}
                    </div>
                    <div className="" onClick={() => toCourse(id)}>
                        <Link to={'/course'} className="course_item__start--btn">Начать</Link>
                    </div>
                </div>
            )}
        </div>

    )
}

export default CourseItem