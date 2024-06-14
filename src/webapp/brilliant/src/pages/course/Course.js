import React, {useEffect, useState} from 'react'

import "./Course.scss";
import './../../style/calendar.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import star from "../../assets/icons/stars/1.png";
import Module from "../../components/module/Module";
import LessonIcon from "../../components/lessonIcon/LessonIcon";
import {useDispatch, useSelector} from "react-redux";
import {fetchModules} from "../../store/slices/moduleSlice";
import {fetchLessons} from "../../store/slices/lessonSlice";

function Course() {
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.activeCourse)
    const modules = useSelector(state => state.module.modules)
    const lessons = useSelector(state => state.lesson.lessons)
    const activeModule = useSelector(state => state.module.activeModule)

    useEffect(() => {
        dispatch(fetchModules(course.id))
    }, []);

    useEffect(() => {
        if (activeModule.id) dispatch(fetchLessons(activeModule.id))
    }, [activeModule])

    return (
        <div className='course'>
            <div className="info">
                <div className='course__info'>
                    <img src={course.icon} alt="" className="course_item--img"/>
                    <div className="course_item__info">
                        <h3 className="title">{course.title}</h3>
                        <p className="course__info__text">{course.description}</p>
                    </div>
                    <div className="course_item__progress">
                        <div className="favotite">
                            <img src={star} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='user__info'>
                    <ProfileHeader/>
                </div>
            </div>
            <div className="course__main">
                <div className="">
                    {/*<button className="course__sign_up">Записаться на курс</button>*/}
                    <p className="course__modules__title">Модули</p>
                    <div className="course__modules">
                        { modules?.map((module, index) => (
                            <Module
                                props={{
                                    ...module,
                                    index: index + 1
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="course__lessons">
                    <p className="course__lessons__title">{activeModule?.index}. {activeModule?.title}</p>
                    <div className="course__lessons__list">
                        { lessons?.map((lesson, index) => (
                            <LessonIcon key={index} index={index} mode={"complete"} isLast={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course