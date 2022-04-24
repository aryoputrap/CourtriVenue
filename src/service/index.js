import {baselink} from './api_url';
import axios from 'axios';

const create = (type = '' ) => {
  let api;
  switch (type) {
    case 'AUTH':
      api = axios.create({
        baseURL: baselink + 'v1/auth',
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 80000,
      });
      break;
    case 'TIME':
      api = axios.create({
        baseURL: baselink + 'v1/schedules',
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 80000,
      });
      break;
    default:
      break;
  }

  const signup = body => api.post('/signup', body); 
  const login = body => api.post('/login', body);
  const otp = body => api.post('/verify-otp', body);
  const time = () => api.get('/times');

  return {
    signup,
    login,
    otp,
    time
  };
};

export default {create};
