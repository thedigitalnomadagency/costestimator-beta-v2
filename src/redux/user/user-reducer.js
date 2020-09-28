import { userActionTypes } from './user-action-types';

const INITIAL_STATE = {
  currentUser: null,
  signinError: '',
  registerError: '',
  signOutError: '',
  signingIn: false,
  registering: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN:
      return {
        ...state,
        signingIn: true,
      };

    case userActionTypes.REGISTER:
      return {
        ...state,
        registering: true,
      };

    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signinError: '',
        registerError: '',
        signingIn: false,
        registering: false,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };

    case userActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload,
        registering: false,
      };

    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        signinError: action.payload,
        signingIn: false,
      };

    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        signOutError: action.payload,
      };

    default:
      return state;
  }
};
