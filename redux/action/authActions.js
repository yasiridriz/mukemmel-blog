import Router from 'next/router';
import axios from 'axios';
import { setCookie, removeCookie } from '../../utils/cookies';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email, password }, type) => {
  if (type !== 'signin' && type !== 'signup') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    axios.post(process.env.api_uri + process.env.api_user_log, { email, password })
      .then((response) => {
        setCookie('token', response.data.token);
        Router.push('/');
        dispatch({type: process.env.AUTHENTICATE, payload: response.data.token});
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({type: process.env.AUTHENTICATE, payload: token});
  };
};

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({type: process.env.DEAUTHENTICATE});
  };
};


export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};