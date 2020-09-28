import { combineReducers } from 'redux';

//reducers
import configReducer from './priceConfig/config-reducer';
import userReducer from './user/user-reducer';

export default combineReducers({
  config: configReducer,
  user: userReducer,
});
