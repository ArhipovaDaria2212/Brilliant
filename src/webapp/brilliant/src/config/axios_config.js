import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post["Content-Type"] = 'application/json'

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        window.location.href = "/login";
    }

    return Promise.reject(error);
});

axios.interceptors.request.use(request => {
    const token = localStorage.getItem("token");
    request.headers.authorization = 'Bearer ' + token
    return request;
}, error => {
    return Promise.reject(error);
});

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data
    })
}