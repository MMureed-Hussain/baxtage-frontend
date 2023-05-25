/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import TransactionServices from './services';

export function* getTenantTransactionsSaga() {
  try {
    const response = yield call(TransactionServices.getTenantTransactions);
    yield put(actions.getTenantTransactionsSuccess(response.data));
  } catch (err) {
    yield put(actions.getTenantTransactionsFailure(err));
  }
}

export function* transactionSaga() {
  yield all([takeLatest(actions.getTenantTransactionsRequest, getTenantTransactionsSaga)]);
}
