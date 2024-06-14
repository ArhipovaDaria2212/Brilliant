import React from 'react'
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

function Account({ courses }) {
    const [date, setDate] = useState(new Date());

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
                                <Slide index={0}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE",
                                            open: true
                                        }}
                                    />
                                </Slide>
                                <Slide index={1}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE"
                                        }}/>
                                </Slide>
                                <Slide index={2}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE"
                                        }}/>
                                </Slide>
                                <Slide index={3}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE"
                                        }}/>
                                </Slide>
                                <Slide index={4}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE"
                                        }}/>
                                </Slide>
                                <Slide index={5}>
                                    <AchiveCard
                                        slide={{
                                            url: pic,
                                            title: "TITLE",
                                            subtitle: "SUBTITLE"
                                        }}/>
                                </Slide>
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
                </div>
            </div>
        </div>

    )
}

export default Account