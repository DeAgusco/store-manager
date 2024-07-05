import axios from "axios";

export const BASE_URL = "https://store-manager-backend-eta.vercel.app";
const TIME_OUT = 50000;
export const USER_TOKEN_NAME = "user_token";
const CSRF_TOKEN_URL = `${BASE_URL}/employee/get-csrf-token/`; // Replace with your endpoint URL

const axiosInstance = axios.create({
    xsrfCookieName: 'csrftoken', // Match Django setting
    xsrfHeaderName: 'HTTP_X_CSRFTOKEN',
    withCredentials: true,
    baseURL: BASE_URL,
    timeout: TIME_OUT,
});

// Fetch CSRF token on initialization
(async () => {
    try {
        const csrfResponse = await axiosInstance.get(CSRF_TOKEN_URL);
        const csrfToken = csrfResponse.data.csrftoken;
        axiosInstance.defaults.headers.common['HTTP_X_CSRFTOKEN'] = csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }
})();


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
// CORS configuration (replace with allowed origins for production)
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Temporary for development

// **Important: Replace with allowed origins for production**
axiosInstance.defaults.headers.common['Access-Control-Allow-Headers'] = 'HTTP_X_CSRFTOKEN';
export default axiosInstance;


