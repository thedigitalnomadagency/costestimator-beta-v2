import { userActionTypes } from './user-action-types';

export const checkUserSesssion = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const emailSignin = (emailandPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN,
  payload: emailandPassword,
});

export const signinSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signinFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
});

export const register = (userCredentials) => ({
  type: userActionTypes.REGISTER,
  payload: userCredentials,
});

export const registerFailure = (errorMessage) => ({
  type: userActionTypes.REGISTER_FAILURE,
  payload: errorMessage,
});
