import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import picture from "./../../assets/authorization/auth.jpg"

import "./Authorization.scss"
import AuthenticationService from "../../services/AuthenticationService";
import {registerUser} from "../../utils/Api";

function Authorization() {

    const [registration, setRegistration] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleInputChange = (e) => {
        setRegistration({ ...registration, [e.target.name]: e.target.value })
    }

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const result = await registerUser(registration)
            setSuccessMessage(result)
            setErrorMessage("")
            setRegistration({ firstName: "", lastName: "", email: "", password: "" })
        } catch (error) {
            setSuccessMessage("")
            setErrorMessage(`Registration error : ${error.message}`)
        }
        setTimeout(() => {
            setErrorMessage("")
            setSuccessMessage("")
        }, 5000)
    }

    return (
        <div className='authorization'>
            <img src={picture} className='auth__img' alt='' />
            <div className="auth__info">
                <h1 className="title">Создайте бесплатную учетную запись, чтобы найти свой индивидуальный путь обучения</h1>
                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                {successMessage && <p className="alert alert-success">{successMessage}</p>}
                <form method="post" className="form" onSubmit={handleRegistration}>
                    <input className="input" id="email"
                           name="email"
                           type="email"
                           placeholder="email"
                           value={registration.email}
                           onChange={handleInputChange}/>
                    <input className="input" id="firstName"
                           name="firstName"
                           type="text"
                           value={registration.firstName}
                           onChange={handleInputChange}
                           placeholder="Имя"/>
                    <input className="input" id="lastName"
                           name="lastName"
                           type="text"
                           value={registration.lastName}
                           onChange={handleInputChange}
                           placeholder="Фамилия"/>
                    <input className="input" type="password"
                           id="password"
                           name="password"
                           value={registration.password}
                           onChange={handleInputChange}
                           placeholder="пароль"/>
                    <button type="submit" className="btn">Зарегистрироваться</button>
                    <p className="privacy">При нажатии Sign up, я соглашаюсь с Brilliant's Terms и Privacy Policy</p>
                </form>
                <div className="to_login">
                    <span>Уже есть аккаунт?
                        <Link className="to_login--link" to="/login">Log in</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Authorization