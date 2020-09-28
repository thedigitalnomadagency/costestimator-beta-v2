import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAYYCeulPsbDAWKM_iqm_2RH4IuRjLHtC4',
  authDomain: 'costestimator-a7490.firebaseapp.com',
  databaseURL: 'https://costestimator-a7490.firebaseio.com',
  projectId: 'costestimator-a7490',
  storageBucket: 'costestimator-a7490.appspot.com',
  messagingSenderId: '359123406214',
  appId: '1:359123406214:web:7ccd36addbe9177bc9f007',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

//creates new user doc in firestore if it does not exist
export const createUserDocument = async (userAuthObj, additionalData) => {
  if (!userAuthObj) return;

  const userDocRef = db.doc(`users/${userAuthObj.uid}`);
  const userDocSnapshot = await userDocRef.get();

  if (!userDocSnapshot.exists) {
    const { email } = userAuthObj;
    const createdAt = new Date();

    try {
      await userDocRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      throw new Error(`error creating user, ${err.message}`);
    }
  }

  return userDocRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      resolve(userAuth);
      unsubscribe();
    }, reject);
  });
};

export const getPriceConfig = async (uid) => {
  try {
    const configSnapshot = await db
      .collection(`users/${uid}/config`)
      .orderBy('addedAt', 'asc')
      .get();
    return configSnapshot.docs.map((docSnapshot) => {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      };
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPriceConfig = async (uid, config) => {
  const addedAt = new Date();
  try {
    const ref = await db
      .collection(`users/${uid}/config`)
      .add({ ...config, addedAt });
    const snapshot = await ref.get();
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (err) {
    console.log(err);
  }
};

export const deletePriceConfig = async (uid, configId) => {
  try {
    const docRef = db.doc(`users/${uid}/config/${configId}`);
    docRef.delete();
  } catch (err) {
    console.log(err);
  }
};

export default firebase;
