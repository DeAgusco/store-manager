import axios from "axios";

export const BASE_URL= "https://store-manager-backend-eta.vercel.app"
const TIME_OUT = 50000;
export const USER_TOKEN_NAME = "user_token"

const axiosInstance = axios.create({
    baseURL:  BASE_URL,
    timeout:  TIME_OUT
})


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


