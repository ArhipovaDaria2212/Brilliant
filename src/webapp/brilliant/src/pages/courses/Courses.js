import * as React from 'react';

import "./Courses.scss"
import {useState} from "react";
import CourseItem from "../../components/courseItem/CourseItem";

export function Courses({ courses }) {

    const [filter, setFilter] = useState('');

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };

    return (
        <div className="courses">
            <h1 className='courses__title'>Курсы</h1>
            <div className="courses__filters__buttons">
                <button onClick={() => handleFilter('')}
                        className={`courses__filters__buttons--btn ${filter === '' ? 'active' : ''}`}>Все
                </button>
                <button onClick={() => handleFilter('студент')}
                        className={`courses__filters__buttons--btn ${filter === 'студент' ? 'active' : ''}`}>Недавние
                    курсы
                </button>
                <button onClick={() => handleFilter('учитель')}
                        className={`courses__filters__buttons--btn ${filter === 'учитель' ? 'active' : ''}`}>Мои курсы
                </button>
                <button onClick={() => handleFilter('профессионал')}
                        className={`courses__filters__buttons--btn ${filter === 'профессионал' ? 'active' : ''}`}>Избранное
                </button>
            </div>
            <div className="courses__items">
                { courses?.map(course => (
                    <CourseItem
                        id={course.id}
                        title={course.title}
                        text={course.description}
                        progress={57}
                        picture={course.icon}
                    />
                ))}
            </div>
        </div>
    );
}