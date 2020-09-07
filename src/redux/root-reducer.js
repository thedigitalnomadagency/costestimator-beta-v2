import { combineReducers } from 'redux';

//reducers
import configReducer from './PriceConfig/config-reducer';

export default combineReducers({
  config: configReducer,
});
