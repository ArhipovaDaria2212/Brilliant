import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import subject_1 from "../../assets/main/subjects/1.png";
import subject_2 from "../../assets/main/subjects/2.png";
import subject_3 from "../../assets/main/subjects/3.png";
import subject_4 from "../../assets/main/subjects/4.png";
import subject_5 from "../../assets/main/subjects/5.png";
import rocket from "../../assets/main/rocket.png";
import topics_1 from "../../assets/main/topics/1/1.png";
import topics_2 from "../../assets/main/topics/2/1.png";
import topics_3 from "../../assets/main/topics/3/1.png";
import topics_4 from "../../assets/main/topics/4/1.png";
import courses_1 from "../../assets/main/courses/1.png";
import courses_2 from "../../assets/main/courses/2.png";
import courses_3 from "../../assets/main/courses/3.png";
import courses_4 from "../../assets/main/courses/4.png";
import courses_5 from "../../assets/main/courses/5.png";
import courses_6 from "../../assets/main/courses/6.png";
import courses_7 from "../../assets/main/courses/7.png";
import courses_8 from "../../assets/main/courses/8.png";


import "./MainPage.scss"

function MainPage() {
	return (
		<>
			<Header />
			<div className="main">
				<section className="section-1 main_page">
					<div className="content">
						<div className="section-1__inner">
							<h1 className="title">“Цель обучения — научить обходиться без учителя” - Э. Хаббард</h1>
							<p className="text">Интерактивное решение задач - это более эффективный (<span className="text--orange">и
								увлекательный!
							</span>) способ
								обучения.</p>
							<Link to='/auth' className="section-1__btn btn--fill">Начать</Link>
							<div className="ticker">
								<p className="outline">The best way to learn</p>
								<p className="fill">math and computer science</p>
							</div>
						</div>
					</div>
				</section >
				<section className="section-2 main_page">
					<div className="content">
						<div className="section-2__inner">
							<h2 className="title">Присоединяйтесь к нам и узнайте, как это сделать:</h2>
							<div className="section-2__subjects">
								<div className="section-2__subject section-2__subject--math">
									<p className="section-2__subject--text">Математика</p>
									<img className="section-2__subject--img" src={subject_1} alt="Математика" />
								</div>
								<div className="section-2__subject section-2__subject--analys">
									<p className="section-2__subject--text">Анализ данных</p>
									<img className="section-2__subject--img" src={subject_2} alt="Анализ данных" />
								</div>
								<div className="section-2__subject section-2__subject--comp_science">
									<p className="section-2__subject--text">Computer Science</p>
									<img className="section-2__subject--img" src={subject_3} alt="Computer science" />
								</div>
								<div className="section-2__subject section-2__subject--prog">
									<p className="section-2__subject--text">Программирование</p>
									<img className="section-2__subject--img" src={subject_4} alt="Программирование" />
								</div>
								<div className="section-2__subject section-2__subject--eng">
									<p className="section-2__subject--text">Английский</p>
									<img className="section-2__subject--img" src={subject_5} alt="Английский" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-3 main_page">
					<div className="content">
						<div className="section-3__inner">
							<h2 className="title">Осваивайте концепции за 15 минут в день</h2>
							<div className="text">
								<p>Неважно абсолютный Вы новичкок или готовы погрузиться в квантовую физику и не только...</p>
								<p>Brilliant позволяет легко и быстро повышать свой <br /> уровень с помощью увлекательных уроков</p>
							</div>
							<Link to='/auth' className="section-3__btn btn--fill">
								Начать прямо сейчас
							</Link>
						</div>
						<img src={rocket} alt="" className="background" />
					</div>
				</section>
				<section className="section-4 main_page">
					<div className="content">
						<div className="section-4__inner">
							<div className="section-4__block section-4__block--1">
								<img src={topics_1} alt="" className="section-4--img" />
								<div className="section-4--text">
									<h2 className="title">Эффективное практическое <br /> обучение</h2>
									<p className="section-4--p">Наглядные, интерактивные уроки делают концепции интуитивно понятными — так что
										даже
										сложные идеи легко усваиваются</p>
									<p className="section-4--p">Наша обратная связь в режиме реального времени и простые объяснения делают
										обучение
										эффективным</p>
								</div>
							</div>
							<div className="section-4__block section-4__block--2">
								<div className="section-4--text">
									<h2 className="title">Учитесь на своем уровне</h2>
									<p className="section-4--p">Как <span>студенты</span>, так и <span>профессионалы</span> могут оттачивать
										дремлющие навыки или осваивать новые</p>
									<p className="section-4--p">Продвигайтесь по урокам и задачам, адаптированным к вашему уровню</p>
									<p className="section-4--p">Предназначен для детей в возрасте <span>от 13 до 113 лет</span></p>
								</div>
								<img src={topics_2} alt="" className="section-4--img" />
							</div>
							<div className="section-4__block section-4__block--3">
								<img src={topics_3} alt="" className="section-4--img" />
								<div className="section-4--text">
									<h2 className="title">Уроки по принципу<br /> “кусочек за кусочком”</h2>
									<p className="section-4--p">Мы помогаем вам не сбиваться с пути, видеть свой прогресс и развивать навыки
										решения проблем по одной концепции за раз.</p>
								</div>
							</div>
							<div className="section-4__block section-4__block--4">
								<div className="section-4--text">
									<h2 className="title">Оставайтесь мотивированными</h2>
									<p className="section-4--p">Сформируйте настоящую привычку к обучению благодаря интересному, актуальному
										контенту, отслеживанию прогресса в виде игры и удобным напоминаниям</p>
									<Link to='/auth' className="section-4--btn btn--fill">К обучению</Link>
								</div>
								<img src={topics_4} alt="" className="section-4--img" />
								<div className="days">
									<p className="yesterday">F</p>
									<div className="today">S</div>
									<div className="tomorow">Su</div>
								</div>
							</div>
							<div className="section-4__block section-4__block--5">
								<div className="section-4--text">
									<h2 className="title">Обучение от профессионалов</h2>
									<p className="section-4--p">Все наши курсы разработаны сертифицированными преподавателями, исследователями и
										профессионалами из Массачусетского технологического института, Калифорнийского технологического
										института, Duke, Microsoft, Google и других
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="courses">
					<div className="content">
						<div className="courses__inner">
							<div className="courses__item">
								<img src={courses_1} alt="Основы математики" className="courses__item--img" />
								<p className="courses__item--text">Основы математики</p>
							</div>
							<div className="courses__item active">
								<img src={courses_2} alt="технический английский" className="courses__item--img " />
								<p className="courses__item--text">технический английский</p>
							</div>
							<div className="courses__item">
								<img src={courses_3} alt="специолист по данным" className="courses__item--img" />
								<p className="courses__item--text">специолист по данным</p>
							</div>
							<div className="courses__item">
								<img src={courses_4} alt="Инженер" className="courses__item--img" />
								<p className="courses__item--text">Инженер</p>
							</div>
							<div className="courses__item">
								<img src={courses_5} alt="разработчик по" className="courses__item--img" />
								<p className="courses__item--text">разработчик по</p>
							</div>
							<div className="courses__item">
								<img src={courses_6} alt="основы алгоритмов" className="courses__item--img" />
								<p className="courses__item--text">основы алгоритмов</p>
							</div>
							<div className="courses__item">
								<img src={courses_7} alt="матиматика старших классов" className="courses__item--img" />
								<p className="courses__item--text">матиматика старших классов</p>
							</div>
							<div className="courses__item">
								<img src={courses_8} alt="статистика и финансы" className="courses__item--img" />
								<p className="courses__item--text">статистика и финансы</p>
							</div>
						</div>
					</div>
				</section>
			</div >
			<Footer />
		</>
	);
}

export default MainPage;
