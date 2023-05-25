/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import CityServices from './services';

export function* getCityItemsSaga() {
  try {
    const response = yield call(CityServices.getCityItems);
    yield put(actions.getCityItemsSuccess(response.data));
  } catch (err) {
    yield put(actions.getCityItemsFailure(err));
  }
}

export function* cityWatcherSaga() {
  yield all([takeLatest('GET_CITY_ITEMS_REQUEST', getCityItemsSaga)]);
}
