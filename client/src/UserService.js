import http from './http-common';

const getAll = async () => {
    return http.get('/users');
}

const get = (userId) => {
    return http.get(`/users/${userId}`);
}

const update = (user) => {
    return http.put(`users`, user);
}

const remove = (userId) => {
    return http.delete(`/users/${userId}`);
}

export default {
    getAll,
    get,
    update,
    remove
}