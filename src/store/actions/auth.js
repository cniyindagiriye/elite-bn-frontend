import axios from 'axios';

import {
  AUTH_START, AUTH_SUCCESS, AUTH_FAIL,
} from '../../constants/actionTypes';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (authData) => ({
  type: AUTH_SUCCESS,
  authData,
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  error,
});

export const auth = (email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  const url = 'api/v1/users/signup';
  axios.post(url, authData)
    .then((response) => {
      console.log(response);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};
