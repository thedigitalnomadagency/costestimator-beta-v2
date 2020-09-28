import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './user-action-types';

//firebase
import {
  auth,
  createUserDocument,
  getCurrentUser,
} from '../../firebase/firebase-utils';

//actions
import {
  signinSuccess,
  signinFailure,
  registerFailure,
  signOutSuccess,
  signOutFailure,
} from './user-actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();

    yield put(
      signinSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export function* emailSignin({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailure(`${error.message} Try Again`));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signinFailure(`${error.message} Try Again`));
  }
}

export function* register({ payload: { email, password, companyName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user, { companyName });
  } catch (error) {
    yield put(registerFailure(`${error.message} Try Again`));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(`${error.message} Try Again`));
  }
}

//sagas
export function* checkUserSessionSaga() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* emailSigninSaga() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN, emailSignin);
}

export function* registerSaga() {
  yield takeLatest(userActionTypes.REGISTER, register);
}

export function* signOutSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT, signOut);
}

//main saga export
export function* userSagas() {
  yield all([
    call(emailSigninSaga),
    call(checkUserSessionSaga),
    call(registerSaga),
    call(signOutSaga),
  ]);
}
