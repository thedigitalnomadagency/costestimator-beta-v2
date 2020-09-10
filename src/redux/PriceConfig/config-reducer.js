import { configActionTypes } from './config-actions-types';

const INTIAL_STATE = {
  travelMode: 'DRIVING',
  minDistance: 0,
  config: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case configActionTypes.ADD_CONFIG:
      return {
        ...state,
        minDistance: action.payload.maxDistance,
        config: [...state.config, action.payload],
      };

    case configActionTypes.DELETE_CONFIG:
      return {
        ...state,
        minDistance: action.payload.minDistance,
        config: state.config.filter((config) => config !== action.payload),
      };

    case configActionTypes.RESET_CONFIG:
      return {
        ...state,
        minDistance: 0,
        config: [],
      };
    default:
      return state;
  }
};
