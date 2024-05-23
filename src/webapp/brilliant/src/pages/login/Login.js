import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';

import picture from "./../../assets/login/1.jpg";
import { useHistory } from 'react-router-dom';

import "./Login.scss";
import {request} from "../../config/axios_config";
import axios from "axios";
import AuthenticationService from "../../services/AuthenticationService";
import {useAuth} from "../../auth/AuthProvider";
import {loginUser} from "../../utils/Api";

function Login() {

    const [errorMessage, setErrorMessage] = useState("")
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()
    const redirectUrl = location.state?.path || "/"

    const handleInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await loginUser(login)
        if (success) {
            const token = success.token
            auth.handleLogin(token)
            navigate("/profile", { replace: true })
        } else {
            setErrorMessage("Неверный адрес электронной почты или пароль. Попробуйте еще раз.")
        }
        setTimeout(() => {
            setErrorMessage("")
        }, 4000)
    }

    return (
        <div className='login'>
            <img src={picture} className='login__img' alt='' />
            <div className="login__info">
                <h1 className="title">Войти</h1>
                <form className="form" onSubmit={handleSubmit} method="post">
                    <input className="input"
                           id="email"
                           name="email"
                           type="email"
                           placeholder="email"
                           value={login.email}
                           onChange={handleInputChange}
                    />
                    <input className="input"
                           id="password"
                           name="password"
                           type="password"
                           placeholder="пароль"
                           value={login.password}
                           onChange={handleInputChange}
                    />
                    <button type="submit" className="btn">Продолжить</button>
                    {errorMessage && <p style={{color: "red", fontSize: "16px", textAlign: "center"}}>{errorMessage}</p>}
                </form>
                <span style={{marginLeft: "10px"}}>
						Еще нет аккаунта? <Link to={"/auth"} style={{textDecoration: "underline"}}> Зарегистрироваться</Link>
                </span>
                <Link className="reset" to="/">Не помню пароль</Link>
            </div>
        </div>
    )
}

export default Login