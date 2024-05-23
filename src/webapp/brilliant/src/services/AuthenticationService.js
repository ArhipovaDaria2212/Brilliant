import axios from 'axios'
import {useEffect} from "react";
import {getUser} from "../utils/Api";

export const KEY_USER = 'auth_user'
export const KEY_PWD = 'auth_pwd'

class AuthenticationService {
    KEY_USER = 'auth_user';
    KEY_PWD = 'auth_pwd';

    authenticate(username, password) {
        return axios.post(`http://localhost:8080/api/login`,
            {
                "username" : username,
                "password" : password
            });
    }

    register(username, email, password) {
        return axios.post(`http://localhost:8080/api/auth`,
            {
                "username" : username,
                "password" : password,
                "email" : email,
                "roles" : "USER"
            });
    }

    getAxiosConfig() {
        return {
            headers: {
                authorization: this.createBasicAuthToken(sessionStorage.getItem(this.KEY_USER), sessionStorage.getItem(this.KEY_PWD)),
            }
        }
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerUserInSession(username, password) {
        sessionStorage.setItem(this.KEY_USER, username);
        sessionStorage.setItem(this.KEY_PWD, password);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    logout() {
        sessionStorage.removeItem(this.KEY_USER);
        sessionStorage.removeItem(this.KEY_PWD);
    }

    isUserLoggedin() {
        let user = sessionStorage.getItem(this.KEY_USER)
        return user !== null;

    }

    getLoggedinUser() {
        let user = sessionStorage.getItem(this.KEY_USER)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(request => {
            request.headers.authorization = token
            console.log("setupAxiosInterceptors ", token);
            return request;
        }, error => {
            return Promise.reject(error);
        });
    }
}

export default new AuthenticationService()