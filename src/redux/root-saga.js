import { all, call } from 'redux-saga/effects';

//sagas

import { userSagas } from './user/user-sagas';

export function* rootSaga() {
  yield all([call(userSagas)]);
}
