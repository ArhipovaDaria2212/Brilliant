import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Review from "../../components/review/Review";

import about_as_1 from "./../../assets/about_us/users/1.png"
import about_as_2 from "./../../assets/about_us/users/2.png"
import about_as_3 from "./../../assets/about_us/users/3.png"
import gif from "./../../assets/about_us/reviews/1.gif"

import "./AboutUs.scss"


function AboutUs() {

    const [reviewData, setReviewData] = useState(null);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(0);


    useEffect(() => {
        axios.get('http://localhost:8080/reviews?category=' + filter + "&page=" + page)
            .then(response => {
                setReviewData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, [filter, page]);

    const handleFilter = (filterValue) => {
        setFilter(filterValue); // Update the filter state when a button is clicked
        setPage(0);
    };

    const decPage = () => {
        if (reviewData && page > 0) setPage(page - 1);
    }

    const incPage = () => {
        if (reviewData && page < reviewData.totalPages - 1) setPage(page + 1);
    }
    // Filter the items based on the selected filter
    // const filteredReviews = reviewData && (filter === 'all' ? reviewData : reviewData.filter(review => review.category === filter));

    return (
        <>
            <Header />
            <main className="main">
                <section className="section-1 about_us">
                    <div className="content">
                        <div className="section-1__inner">
                            <h1 className="title">Мы строим лучшее место на Земле для Вашего саморазвития</h1>
                            <p className="desc">В процессе работы мы были рады получить много любви от наших пользователей</p>
                        </div>
                    </div>
                </section>

                <section className="section-2 about_us">
                    <div className="content">
                        <div className="section-2__inner">
                            <h2 className="title">Кто учится в Brilliant?</h2>
                            <div className="cards">
                                <div className="cards__item">
                                    <img src={about_as_1} alt="Студенты" className="cards__item--img" />
                                    <h3 className="cards__item--title">Студенты</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Осваивайте концепции с помощью решения задач по математике, естественным
                                            наукам и информатике</p>
                                        <p className="cards__item--p">
                                            Развивайте интуицию вместо заучивания формул
                                        </p>
                                    </div>
                                </div>
                                <div className="cards__item">
                                    <img src={about_as_2} alt="Профессионалы"
                                        className="cards__item--img cards__item--img--round" />
                                    <h3 className="cards__item--title">Профессионалы</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Обновляйте свою базу знаний</p>
                                        <p className="cards__item--p">
                                            Изучайте темы от теории вероятностей до компьютерных наук и машинного обучения
                                        </p>
                                    </div>
                                </div>
                                <div className="cards__item">
                                    <img src={about_as_3} alt="Слушатели" className="cards__item--img" />
                                    <h3 className="cards__item--title">Слушатели</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Поддерживайте активность своего ума и совершенствуйте навыки критического
                                            мышления
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3 about_us">
                    <div className="content">
                        <div className="section-3__inner">
                            <div className="filters">
                                <div className="filters__info">
                                    <div className="filters__info--text">
                                        <h2 className="title">Отзывы пользователей</h2>
                                        <p className="desc">Более 50000 5-звездочных отзывов</p>
                                    </div>
                                    <img src={gif} alt="Отзывы" className="filters__info--img" />
                                </div>
                                <div className="filters__form">
                                    <div className="custom-select">
                                    </div>
                                    <div className="filters__buttons">
                                        <button onClick={() => handleFilter('')} className={`filters__buttons--btn ${filter === '' ? 'active' : ''}`}>Все</button>
                                        <button onClick={() => handleFilter('студент')} className={`filters__buttons--btn ${filter === 'студент' ? 'active' : ''}`}>студенты</button>
                                        <button onClick={() => handleFilter('учитель')} className={`filters__buttons--btn ${filter === 'учитель' ? 'active' : ''}`}>учителя</button>
                                        <button onClick={() => handleFilter('профессионал')} className={`filters__buttons--btn ${filter === 'профессионал' ? 'active' : ''}`}>Профессионалы</button>
                                        <button onClick={() => handleFilter('родитель')} className={`filters__buttons--btn ${filter === 'родитель' ? 'active' : ''}`}>родители</button>
                                        <button onClick={() => handleFilter('слушатель')} className={`filters__buttons--btn ${filter === 'слушатель' ? 'active' : ''}`}>слушатели</button>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews">
                                <div className="reviews__items">
                                    { reviewData && reviewData.content.map((review, index) => (
                                        <Review key={index}
                                                stars={review.grade}
                                                title={review.name}
                                                text={review.text}
                                                category={review.category} />
                                    ))}
                                </div>
                                <div className="pagination">
                                    <button onClick={() => decPage()}>&lt;</button>
                                    <span className="current"> {page + 1}</span> of <span className="all">{reviewData && reviewData.totalPages} </span>
                                    <button onClick={() => incPage()}>&gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-4 about_us">
                    <div className="content">
                        <div className="section-4__inner">
                            <h2 className="title">
                                Join over 10 million people learning on Brilliant
                            </h2>
                            <Link to="/auth" className="section-4--btn btn--outline">Начать прямо сейчас</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    )
}

export default AboutUs