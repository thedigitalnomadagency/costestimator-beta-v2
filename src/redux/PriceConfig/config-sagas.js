import { takeLatest, all, put, call } from 'redux-saga/effects';
import { configActionTypes } from './config-action-types';
import { userActionTypes } from '../user/user-action-types';

//firebase
import {
  getPriceConfig,
  addPriceConfig,
  deletePriceConfig,
} from '../../firebase/firebase-utils';

//actions
import { setConfig, setNewConfig } from './config-actions';

export function* getConfig({ payload: { id } }) {
  const config = yield call(getPriceConfig, id);
  yield put(setConfig(config));
}

export function* addConfig({ payload: { userId, config } }) {
  const newCOnfig = yield call(addPriceConfig, userId, config);
  yield put(setNewConfig(newCOnfig));
}

export function* deleteConfig({
  payload: {
    userId,
    config: { id },
  },
}) {
  yield call(deletePriceConfig, userId, id);
}

//sagas
export function* getConfigSaga() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, getConfig);
}

export function* addConfigSaga() {
  yield takeLatest(configActionTypes.ADD_CONFIG, addConfig);
}

export function* deleteConfigSaga() {
  yield takeLatest(configActionTypes.DELETE_CONFIG, deleteConfig);
}

//main saga export
export function* configSagas() {
  yield all([call(getConfigSaga), call(addConfigSaga), call(deleteConfigSaga)]);
}
