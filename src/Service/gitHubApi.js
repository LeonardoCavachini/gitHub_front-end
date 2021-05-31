import axios from 'axios';

const data = {
  client_id:"73e452b8483b248c51a0",
  client_secret:"5e416eea06ea372b992809d291ccbff96060021d",
}

const gitHubApi = axios.create({
  baseURL: 'http://api.github.com',
});

export default gitHubApi;

// https://github.com/login/oauth/authorize?scope=user,email&client_id=73e452b8483b248c51a0