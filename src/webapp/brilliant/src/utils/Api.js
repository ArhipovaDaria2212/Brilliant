import axios from "axios"
import {storage} from "../config/firebase_config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


import io from 'socket.io-client';

const socket = io('http://217.71.129.139:3000', {
    withCredentials: true,
    extraHeaders: {
        "Access-Control-Allow-Origin": "http://217.71.129.139:4011"
    }
});

/* This function register a new user */
export async function registerUser(registration) {
    try {
        const response = await axios.post("/auth/register-user", registration)
        console.log("FRONT SENT QUERY")
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data)
        } else {
            throw new Error(`User registration error : ${error.message}`)
        }
    }
}

/* This function login a registered user */
export async function loginUser(login) {
    try {
        const response = await axios.post("/auth/login", login)
        if (response.status >= 200 && response.status < 300) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

/*  This is function to get the user profile */
export async function getUserProfile(userId, token) {
    try {
        const response = await axios.get(`users/profile/${userId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

/* This is the function to delete a user */
export async function deleteUser(userId) {
    try {
        const response = await axios.delete(`/users/delete/${userId}`)
        return response.data
    } catch (error) {
        return error.message
    }
}

/* This is the function to get a single user */
export async function getUser(userId) {
    try {
        const response = await axios.get(`/users/${userId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

/* This is the function to get courses */
export async function getCourses() {
    try {
        const response = await axios.get(`/courses`)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getModules(courseId) {
    try {
        const response = await axios.get(`/modules/` + courseId)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getLessons(moduleId) {
    try {
        const response = await axios.get(`/lessons/` + moduleId)
        console.log(response)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getLesson(path) {
    try {
        const r = ref(storage, path);

        return getDownloadURL(r)
            .then((url) => {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';

                    xhr.onload = (event) => {
                        if (xhr.status === 200) {
                            const blob = xhr.response;

                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const fileText = reader.result;
                                resolve(fileText); // Возврат текста файла через resolve
                            };
                            reader.readAsText(blob);
                        } else {
                            reject(new Error('Request failed with status code: ' + xhr.status));
                        }
                    };

                    xhr.onerror = () => {
                        reject(new Error('Request failed'));
                    };

                    xhr.open('GET', url);
                    xhr.send();
                });
            })
    } catch (error) {
        throw error
    }
}