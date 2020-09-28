import { all, call } from 'redux-saga/effects';

//sagas

import { userSagas } from './user/user-sagas';
import { configSagas } from './priceConfig/config-sagas';

export function* rootSaga() {
  yield all([call(userSagas), call(configSagas)]);
}
