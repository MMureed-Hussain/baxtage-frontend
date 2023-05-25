import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import utilServices from './services';

export function* getRegionsSaga() {
  try {
    const response = yield call(utilServices.getRegions);
    yield put(actions.getRegionsSuccess(response.data));
  } catch (err) {
    yield put(actions.getRegionsFailure(err));
  }
}

export function* getDistrictsByCityId({ payload }) {
  try {
    const response = yield call(utilServices.getDistricts, payload);
    yield put(actions.getDistrictsByCityIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getDistrictsByCityIdFailure(err));
  }
}

export function* getCitiesByCountryIdSaga({ payload }) {
  try {
    const response = yield call(utilServices.getCitiesByCountryId, payload);
    yield put(actions.getCitiesByCountryIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getCitiesByCountryIdFailure(err));
  }
}

export function* getCountriesSaga() {
  try {
    const response = yield call(utilServices.getCountries);
    yield put(actions.getCountriesSuccess(response.data));
  } catch (err) {
    yield put(actions.getCountriesFailure(err));
  }
}

export function* utilsSaga() {
  yield all([
    takeLatest(actions.getRegionsRequest, getRegionsSaga),
    takeLatest(actions.getDistrictsByCityIdRequest, getDistrictsByCityId),
    takeLatest(actions.getCitiesByCountryIdRequest, getCitiesByCountryIdSaga),
    takeLatest(actions.getCountriesRequest, getCountriesSaga),
  ]);
}
