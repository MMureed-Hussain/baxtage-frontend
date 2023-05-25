/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import AuthServices from './services';

export function* sentOtpSaga({ payload }) {
  try {
    const response = yield call(AuthServices.sentOtpService, payload);
    yield put(actions.sendOtpSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    payload?.callback?.('error', err.response.data);
    yield put(actions.sendOtpFailure(err));
  }
}

export function* verifyCodeSaga({ payload }) {
  try {
    const response = yield call(AuthServices.verifyCodeService, payload);
    yield put(actions.verifyCodeSuccess(response.data));
    payload?.callback?.('success', response.data.token);
  } catch (err) {
    payload?.callback?.('error', err.response.data);
    yield put(actions.verifyCodeFailure(err));
  }
}

export function* registerSaga({ payload }) {
  try {
    const response = yield call(AuthServices.registerService, payload);
    yield put(actions.createAccountSuccess(response.data.data));
    payload?.callback?.('success', response.data.data);
  } catch (err) {
    payload?.callback?.('error', err.response.data);
    yield put(actions.createAccountFailure(err));
  }
}

export function* loginSaga({ payload }) {
  try {
    const response = yield call(AuthServices.loginService, payload);
    yield put(actions.loginSuccess(response.data.data));
    payload?.callback?.('success', response.data.data);
  } catch (err) {
    payload?.callback?.('error', err.response.data);
    yield put(actions.loginFailure(err));
  }
}

export function* resetPasswordSaga({ payload }) {
  try {
    const response = yield call(AuthServices.resetPasswordService, payload);
    yield put(actions.resetPasswordSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    payload?.callback?.('error', err.response.data);
    yield put(actions.resetPasswordFailure(err));
  }
}

export function* authSaga() {
  yield all([
    takeLatest(actions.sendOtpRequest, sentOtpSaga),
    takeLatest(actions.verifyCodeRequest, verifyCodeSaga),
    takeLatest(actions.createAccountRequest, registerSaga),
    takeLatest(actions.loginRequest, loginSaga),
    takeLatest(actions.resetPasswordRequest, resetPasswordSaga),
  ]);
}
