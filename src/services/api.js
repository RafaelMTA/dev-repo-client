import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const getRepositories = async(userId, query) => {
    let url = `/${userId}/repositories`;

    if(query !== '') url += `?q=${query}`;

    return api.get(url);
};

export const createRepository = async(userId, repositoryUrl) => {
    const repositoryName = getRepositoryName(repositoryUrl);
    console.log(repositoryName);
    const url = `/${userId}/repositories/`;
    return api.post(url, {name: repositoryName, url: repositoryUrl});
}

export const deleteRepository = async(userId, repositoryId) => {
    console.log(repositoryId);
    const url = `/${userId}/repositories/${repositoryId}`;
    return api.delete(url);
}

export const createSession = async(email, password) => {
    return api.post('/signin', {email, password});
}

const getRepositoryName = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;
    const match = url.match(regex);

    if(match[2]) {
        const values = match[2].split('/');
        return `${values[1]}/${values[2]}`;
    }
}