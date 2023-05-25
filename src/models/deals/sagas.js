import { takeLatest, all, call, put } from 'redux-saga/effects';

// eslint-disable-next-line import/no-named-as-default
import DealsServices from './services';
import * as actions from './actions';

export function* getDealsSaga() {
  try {
    const response = yield call(DealsServices.getDeals);
    yield put(actions.getDealsSuccess(response.data));
  } catch (err) {
    yield put(actions.getDealsFailure(err));
  }
}

export function* createDealSaga({ payload }) {
  try {
    const response = yield call(DealsServices.createDeal, payload);
    yield put(actions.createDealSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.createDealFailure(err));
    payload?.callback?.('success');
  }
}

export function* getDealByIdSaga({ payload }) {
  try {
    const response = yield call(DealsServices.getDealById, payload);
    yield put(actions.getDealByIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getDealByIdFailure(err));
  }
}

export function* editDealSaga({ payload }) {
  const { id, callback, ...data } = payload;
  try {
    const response = yield call(DealsServices.editDeal, id, data);
    yield put(actions.getDealByIdSuccess(response.data));
    callback?.('success');
  } catch (err) {
    yield put(actions.getDealByIdFailure(err));
    callback?.('error', err);
  }
}

export function* dealsSaga() {
  yield all([
    takeLatest(actions.getDealsRequest, getDealsSaga),
    takeLatest(actions.createDealRequest, createDealSaga),
    takeLatest(actions.getDealByIdRequest, getDealByIdSaga),
    takeLatest(actions.editDealRequest, editDealSaga),
  ]);
}
