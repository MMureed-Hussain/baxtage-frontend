import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import orderServices from './services';

export function* getOrdersSaga() {
  try {
    const response = yield call(orderServices.getOrders);
    yield put(actions.getOrdersSuccess(response.data));
  } catch (err) {
    yield put(actions.getOrdersFailure(err));
  }
}

export function* cancelOrderSaga({ payload }) {
  try {
    const response = yield call(orderServices.cancelOrder, payload.id);
    yield put(actions.cancelOrderSuccess(response.data));
  } catch (err) {
    yield put(actions.cancelOrderFailure(err));
  }
}

export function* ordersSaga() {
  yield all([
    takeLatest(actions.getOrdersRequest, getOrdersSaga),
    takeLatest(actions.cancelOrderRequest, cancelOrderSaga),
  ]);
}
