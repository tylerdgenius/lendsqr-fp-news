import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: '0b162c6ce3774432bff8d9d861e8d8a5',
    language: 'en',
  },
});

export default {newsApi};
