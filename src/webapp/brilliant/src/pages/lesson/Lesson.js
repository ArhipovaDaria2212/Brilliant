import React, {useEffect} from 'react'

import back from "./../../assets/lessons/back.png"

import "./Lesson.scss"
import LessonIcon from "../../components/lessonIcon/LessonIcon";
import {Link} from "react-router-dom";
import {fetchModules} from "../../store/slices/moduleSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchLessonResource, fetchLessons, setActiveLesson} from "../../store/slices/lessonSlice";

const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

function Lesson({mode, isLast}) {
    const dispatch = useDispatch();
    const activeModule = useSelector(state => state.module.activeModule)
    const activeLesson = useSelector(state => state.lesson.activeLesson)
    const lessons = useSelector(state => state.lesson.lessons)

    const html = useSelector(state => state.lesson.activeResourceHTML)
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(html);

    useEffect(() => {
        dispatch(fetchLessons(activeModule.id))
    }, [activeModule]);

    useEffect(() => {
        dispatch(fetchLessonResource(activeLesson.resource))
    }, [activeLesson])

    const icons = Array.from({ length: lessons?.length }, (_, index) => (
        <LessonIcon key={index} index={index} mode={"complete"} isLast={false} form={'round'} />
    ));

    const nextListener = () => {
        if (activeLesson.index !== lessons.length - 1) {
            dispatch(setActiveLesson(activeLesson.index + 1));
        }
    }

    const prevListener = () => {
        if (activeLesson.index !== 0) {
            dispatch(setActiveLesson(activeLesson.index - 1));
        }
    }

    return (
        <div className="lesson_page">
            <div className="lesson_page__menu">
                <Link to="/course" className="lesson_page__to_profile">
                    <img src={back} alt=""/>
                </Link>
                <div className="lesson_page__menu__lessons">
                    {icons}
                </div>
            </div>
            <div className="lesson_page__main">
                <div onClick={() => prevListener()} className="lesson_page__prev"></div>
                <div className="lesson_page__text--wrapper">
                    {reactElement}
                </div>
                <div onClick={() => nextListener()}  className="lesson_page__next"></div>
            </div>
        </div>
    )
}

export default Lesson