import axios from 'axios';

const gitHubApi = axios.create({
  baseURL: process.env.REACT_APP_API_GIT_URL,
});

export default gitHubApi;
