/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import PackageServices from './services';

export function* getPackagesSaga() {
  try {
    const response = yield call(PackageServices.getTenantTransactions);
    yield put(actions.getPackagesSuccess(response.data));
  } catch (err) {
    yield put(actions.getPackagesFailure(err));
  }
}

export function* packageSaga() {
  yield all([takeLatest(actions.getPackagesRequest, getPackagesSaga)]);
}
