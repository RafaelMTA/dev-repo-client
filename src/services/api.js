import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const getRepositories = async(userId, query) => {
    let url = `/${userId}/repositories`;

    if(query !== '') url += `?q=${query}`;

    return api.get(url);
};