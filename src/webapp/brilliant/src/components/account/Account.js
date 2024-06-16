import React, {useEffect} from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';


import "./Account.scss";
import './../../style/calendar.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pic from "./../../assets/achives/close.svg";
import img from "./../../assets/profile/study.png";

import AchiveCard from '../../components/achiveCard/AchiveCard';
import CourseItem from '../../components/courseItem/CourseItem';
import {useDispatch, useSelector} from "react-redux";
import {fetchAchives} from "../../store/slices/achiveSlice";
import {alignProperty} from "@mui/material/styles/cssUtils";

function Account({courses}) {
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch()
    const achives = useSelector(state => state.achive.achives)

    useEffect(() => {
        dispatch(fetchAchives())
    }, [])

    return (
        <div className="account">
            <h1 className='account__title'>Профиль</h1>
            <div className="progress">
                <div className='calendar-container'>
                    <img src={img}/>
                    {/*<Calendar value={date}*/}
                    {/*          showNeighboringMonth={false}>*/}
                    {/*</Calendar>*/}
                </div>
                <div className="achives">
                    <h2 className='achives__title'>Цели и достижения</h2>
                    <div className="achives__slider">
                        <CarouselProvider
                            naturalSlideWidth={300}
                            naturalSlideHeight={455}
                            totalSlides={6}
                            visibleSlides={4}
                            infinite={true}
                        >
                            <ButtonBack className='prev'/>
                            <Slider className='slider'>
                                {achives?.map(((achive, i) => (
                                    <Slide index={i} key={i}>
                                        <AchiveCard
                                            slide={{
                                                url: pic,
                                                title: achive.title,
                                                subtitle: achive.description,
                                                open: true,
                                                toAchive: achive.toAchive
                                            }}
                                        />
                                    </Slide>
                                )))}
                            </Slider>
                            <ButtonNext className='next'></ButtonNext>
                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <div className="profile__courses">
                <h1 className='profile__courses__title'>Недавние курсы</h1>
                <div className="profile__courses__list">
                    { courses?.map(course => (
                        <CourseItem
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            text={course.description}
                            progress={57}
                            picture={course.icon}
                            level={course.level}
                            time={course.time}
                        />
                    ))}

                    { courses?.length === 0 && <div style={{  padding: "100px 35px", width: "100%"}}>Здесь пока что нет курсов :(</div>}
                </div>
            </div>
        </div>

    )
}

export default Account