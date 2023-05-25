/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import SubscriptionServices from './services';

export function* getTenantSubscriptionsSaga() {
  try {
    const response = yield call(SubscriptionServices.getTenantSubscriptions);
    yield put(actions.getTenantSubscriptionsSuccess(response.data));
  } catch (err) {
    yield put(actions.getTenantSubscriptionsFailure(err));
  }
}

export function* getActiveSubscriptionSaga() {
  try {
    const response = yield call(SubscriptionServices.getActiveSubscription);
    yield put(actions.getActiveSubscriptionSuccess(response.data));
  } catch (err) {
    yield put(actions.getActiveSubscriptionFailure(err));
  }
}

export function* createSubscriptionOrderSaga({ payload }) {
  try {
    const response = yield call(SubscriptionServices.createOrder, payload);
    yield put(actions.createSubscriptionOrderSuccess(response.data));
    payload?.callback?.('success', response.data.data);
  } catch (err) {
    payload?.callback?.('failure', err);
    yield put(actions.createSubscriptionOrderFailure(err));
  }
}

export function* getOrderDetailsSaga({ payload }) {
  try {
    const response = yield call(SubscriptionServices.getOrder, payload);
    yield put(actions.getOrderDetailsSuccess(response.data));
    payload?.callback?.('success', response.data.data);
  } catch (err) {
    payload?.callback?.('failure', err);
    yield put(actions.getOrderDetailsFailure(err));
  }
}

export function* subscriptionSaga() {
  yield all([
    takeLatest(actions.getTenantSubscriptionsRequest, getTenantSubscriptionsSaga),
    takeLatest(actions.createSubscriptionOrderRequest, createSubscriptionOrderSaga),
    takeLatest(actions.getOrderDetailsRequest, getOrderDetailsSaga),
    takeLatest(actions.getActiveSubscriptionRequest, getActiveSubscriptionSaga),
  ]);
}
