import { takeLatest, all, call, put } from 'redux-saga/effects';

// eslint-disable-next-line import/no-named-as-default
import PropertiesServices from './services';
import * as actions from './actions';

export function* getPropertiesSaga() {
  try {
    const response = yield call(PropertiesServices.getProperties);
    yield put(actions.getPropertiesSuccess(response.data));
  } catch (err) {
    yield put(actions.getPropertiesFailure(err));
  }
}

export function* searchPropertiesSaga({ payload }) {
  try {
    const response = yield call(PropertiesServices.searchProperties, payload);
    yield put(actions.searchPropertiesSuccess(response.data));
  } catch (err) {
    yield put(actions.searchPropertiesFailure(err));
  }
}
export function* getPropertySaga({ payload }) {
  try {
    const response = yield call(PropertiesServices.getProperty, payload);
    yield put(actions.getPropertySuccess(response.data));
  } catch (err) {
    yield put(actions.getPropertyFailure(err));
  }
}

export function* createPropertySaga({ payload }) {
  const { callback, ...values } = payload;

  try {
    const response = yield call(PropertiesServices.createProperty, values);
    yield put(actions.createPropertySuccess(response.data));
    console.log(response);
    callback?.('success', response.data);
  } catch (err) {
    yield put(actions.createPropertyFailure(err));
    callback?.('error', err);
  }
}

export function* propertiesSaga() {
  yield all([
    takeLatest(actions.getPropertiesRequest, getPropertiesSaga),
    takeLatest(actions.searchPropertiesRequest, searchPropertiesSaga),
    takeLatest(actions.createPropertyRequest, createPropertySaga),
    takeLatest(actions.getPropertyRequest, getPropertySaga),
  ]);
}
