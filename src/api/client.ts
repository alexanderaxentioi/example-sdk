import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

const client = axios.create({
    baseURL: API_URL,
});

export default client;
