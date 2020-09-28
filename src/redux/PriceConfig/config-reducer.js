import { configActionTypes } from './config-action-types';
import { userActionTypes } from '../user/user-action-types';

const INTIAL_STATE = {
  travelMode: 'DRIVING',
  minDistance: 0,
  loading: false,
  config: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case configActionTypes.SET_CONFIG:
      return {
        ...state,
        minDistance:
          action.payload.length === 0
            ? 0
            : action.payload[action.payload.length - 1].maxDistance,
        config: action.payload,
      };

    case configActionTypes.ADD_CONFIG:
      return {
        ...state,
        loading: true,
      };
    case configActionTypes.SET_NEW_CONFIG:
      return {
        ...state,
        loading: false,
        minDistance: action.payload.maxDistance,
        config: [...state.config, action.payload],
      };

    case configActionTypes.DELETE_CONFIG:
      return {
        ...state,
        minDistance: action.payload.config.minDistance,
        config: state.config.filter(
          (config) => config.id !== action.payload.config.id
        ),
      };

    case userActionTypes.CHECK_USER_SESSION:
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        minDistance: 0,
        config: [],
      };

    default:
      return state;
  }
};
