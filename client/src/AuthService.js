import http from './http-common';

const login = async (username, password) => {
    return http.post('auth/login', {
        username,
        password,
    })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

const register = (username, email, password) => {
    return http.post('/auth/register/', {
        username,
        email,
        password
    });
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export default {
    login,
    logout,
    register,
    getCurrentUser
}