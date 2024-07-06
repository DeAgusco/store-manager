import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TIME_OUT = 50000;
export const USER_TOKEN_NAME = "user_token";

const axiosInstance = axios.create({
    xsrfCookieName: 'csrftoken', // Match Django setting
    xsrfHeaderName: 'HTTP_X_CSRFTOKEN',
    withCredentials: true,
    baseURL: BASE_URL,
    timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
       console.log('error in saveToken', error);
       throw (error) 
    }
}

axiosInstance.interceptors.request.use(async (req) => {
    try {
        const access_token = localStorage.getItem(USER_TOKEN_NAME)
        req.headers.Authorization = `Token ${access_token}`;
        return req;
    } catch (error) {
        return req;
    }
})

export default axiosInstance;


