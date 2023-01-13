import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/people';

export const api = axios.create({
    baseURL: BASE_URL,
});

export const clearBaseURL = (url) => {
    const newUrl = url.replace(BASE_URL, '');
    return newUrl;
}