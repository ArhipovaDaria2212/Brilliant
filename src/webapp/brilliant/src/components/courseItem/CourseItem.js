import React from 'react'

import star from "./../../assets/icons/stars/star.svg"
import star_empty from "./../../assets/icons/stars/star_empty.svg"

import "./CourseItem.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCourse} from "../../store/slices/courseSlice";

function CourseItem(course) {

    const [showDetails, setShowDetails] = React.useState(false);
    const dispatch = useDispatch();

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toCourse = (courseId) => {
        dispatch(setActiveCourse(courseId))
    }

    return (
        <div className="course_item__wrapper" onClick={toggleDetails}>
            <div className='course_item' >
                <img src={course.picture} alt="icon" className="course_item--img"/>
                <div className="course_item__info">
                    <h3 className="title">{ course.title }</h3>
                    <p className="text">{ course.text }</p>
                </div>
                <div className="course_item__progress">
                    <div className="favorite__active">
                        {/*{favoriteCourses.includes(course) && <img src={star} alt=""/>}*/}
                        {/*{!favoriteCourses.includes(course) && <img src={star_empty} alt=""/>}*/}

                    </div>
                </div>
            </div>
            {showDetails && (
                <div className="course_item__additional_info__wrapper">
                    <div className="course_item__additional_info">
                        <div className="course_item__info">Примерное время на прохождение
                            курса: <span>{course.time} м</span></div>
                        <div className="course_item__info">Уровень:
                            {course.level==="start" && <span> для начинающих</span>}
                            {course.level==="medium" && <span> средний</span>}
                            {course.level==="hard" && <span> для продвинутых</span>}
                        </div>
                        {/*<div className="course_item__info">Количество модулей: <span>21</span></div>*/}
                    </div>
                    <div className="" onClick={() => toCourse(course.id)}>
                        <Link to={'/course'} className="course_item__start--btn">Начать</Link>
                    </div>
                </div>
            )}
        </div>

    )
}

export default CourseItem