import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "./../../assets/authorization/add_info/1.jpg"
import img2 from "./../../assets/authorization/add_info/2.jpg"
import img3 from "./../../assets/authorization/add_info/3.jpg"
import img4 from "./../../assets/authorization/add_info/4.jpg"
import img5 from "./../../assets/authorization/add_info/5.jpg"
import img6 from "./../../assets/authorization/add_info/6.jpg"

import "./AddInfo.scss"

function AddInfo() {
    return (
        <div className='add_info'>
            <div className='status_bar'>
                <div className='progress'></div>
            </div>
            <h1 className='title'>Что описывает тебя лучше всего?</h1>
            <p className='subtitle'>Это поможет нам подобрать курсы под твой опыт.</p>
            <form className='form'>
                <div className='form__inner'>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img1} alt='' />
                        Студент
                        <span className='input--grey'> или без 5-ти минут студент</span>
                    </div>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img2} alt='' />
                        Профессионал
                        <span className='input--grey'>, повышающий квалификацию </span>
                    </div>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img3} alt='' />
                        Опекун
                        <span className='input--grey'> ребенка школьного возраста</span>
                    </div>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img4} alt='' />
                        Слушатель
                    </div>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img5} alt='' />
                        Учитель
                    </div>
                    <div className='input' type='radio' value="" name='category'>
                        <img className='form__img' src={img6} alt='' />
                        Другое
                    </div>
                </div>

                <Link to="/profile" className='btn'>Продолжить</Link>
            </form>
        </div>
    )
}

export default AddInfo