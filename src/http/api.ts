import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config) => {


    const userSessionData = JSON.parse(sessionStorage.getItem('user') || `{}`)
    const sessionAccessToken = userSessionData.accessToken
    const sessionRefreshToken = userSessionData.refreshToken

    config.headers.Authorization = sessionAccessToken;
    config.headers.refreshToken = sessionRefreshToken;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const login = async (data: { email: string; password: string }) => {
    return api.post('/api/v1/users/login', data)
}
export const registerUser = async (data: { email: string; password: string; confirmPassword: string }) => {
    return api.post('/api/v1/users/register', data)
}

export const logoutUser = async () => {
    return api.post('/api/v1/users/logout')
}