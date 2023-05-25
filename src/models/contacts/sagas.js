import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import contactServices from './services';

export function* getContactsSaga() {
  try {
    const response = yield call(contactServices.getContacts);
    yield put(actions.getContactsSuccess(response.data));
  } catch (err) {
    yield put(actions.getContactsFailure(err));
  }
}

export function* getContactByIdSaga({ payload }) {
  try {
    const response = yield call(contactServices.getContact, payload);
    yield put(actions.getContactByIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getContactByIdFailure(err));
  }
}

export function* createContactSaga({ payload }) {
  try {
    const response = yield call(contactServices.createContact, payload);
    yield put(actions.createContactSuccess(response.data));
    payload?.callback?.('success', response.data);
  } catch (err) {
    yield put(actions.createContactFailure(err));
    payload?.callback?.('error');
  }
}

export function* editContactSaga({ payload }) {
  try {
    const response = yield call(contactServices.editContact, payload);
    yield put(actions.editContactSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.editContactFailure(err));
    payload?.callback?.('error');
  }
}

export function* searchSaga({ payload }) {
  try {
    const response = yield call(contactServices.search, payload);
    yield put(actions.searchContactByNameSuccess(response.data));
  } catch (err) {
    yield put(actions.searchContactByNameFailure(err));
  }
}

export function* contactsSaga() {
  yield all([
    takeLatest(actions.getContactsRequest, getContactsSaga),
    takeLatest(actions.getContactByIdRequest, getContactByIdSaga),
    takeLatest(actions.createContactRequest, createContactSaga),
    takeLatest(actions.editContactRequest, editContactSaga),
    takeLatest(actions.searchContactByNameRequest, searchSaga),
  ]);
}
