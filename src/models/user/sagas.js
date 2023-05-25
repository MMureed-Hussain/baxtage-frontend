/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import UserServices from './services';

export function* getUserInformationSaga({ payload }) {
  try {
    const response = yield call(UserServices.getMe, payload);
    yield put(actions.getUserInformationSuccess(response.data));
    payload?.callback?.('success', response.data);
  } catch (err) {
    payload?.callback?.('error', err.response);
    yield put(actions.getUserInformationFailure(err));
  }
}

export function* getUserInvitationsSaga() {
  try {
    const response = yield call(UserServices.getUserInvitations);
    yield put(actions.getUserInvitationsSuccess(response.data));
  } catch (err) {
    yield put(actions.getUserInvitationsFailure(err));
  }
}

export function* getUserWorkspacesSaga() {
  try {
    const response = yield call(UserServices.getUserWorkspaces);
    yield put(actions.getUserWorkspacesSuccess(response.data));
  } catch (err) {
    yield put(actions.getUserWorkspacesFailure(err));
  }
}

export function* getWorkspaceSaga({ payload }) {
  try {
    const response = yield call(UserServices.getWorkspaceById, payload);
    yield put(actions.getWorkspaceByIdSuccess(response.data));
  } catch (err) {
    yield put(actions.getWorkspaceByIdFailure(err));
  }
}

export function* editWorkspaceSaga({ payload }) {
  try {
    const response = yield call(UserServices.editWorkspace, payload);
    yield put(actions.editWorkspaceByIdSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.editWorkspaceByIdFailure(err));
    payload?.callback?.('error');
  }
}

export function* acceptInvitationsSaga({ payload }) {
  try {
    const response = yield call(UserServices.acceptInvitation, payload);
    yield put(actions.acceptInvitationSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.acceptInvitationFailure(err));
  }
}

export function* declineInvitationsSaga({ payload }) {
  try {
    const response = yield call(UserServices.declineInvitation, payload);
    yield put(actions.declineInvitationSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.declineInvitationFailure(err));
  }
}

export function* editProfileSaga({ payload }) {
  try {
    const response = yield call(UserServices.editProfile, payload);
    yield put(actions.editProfileSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.editProfileFailure(err));
    payload?.callback?.('error');
  }
}

export function* setDefaultWorkspaceSaga({ payload }) {
  try {
    const response = yield call(UserServices.setDefaultWorkspace, payload.id);
    yield put(actions.setDefaultWorkspaceSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.setDefaultWorkspaceFailure(err));
    payload?.callback?.('error');
  }
}

export function* leaveWorkspaceSaga({ payload }) {
  try {
    const response = yield call(UserServices.leaveWorkspace, payload);
    yield put(actions.leaveWorkspaceSuccess(response.data));
  } catch (err) {
    yield put(actions.leaveWorkspaceFailure(err));
  }
}

export function* userSaga() {
  yield all([
    takeLatest(actions.getUserInformationRequest, getUserInformationSaga),
    takeLatest(actions.getUserInvitationsRequest, getUserInvitationsSaga),
    takeLatest(actions.getUserWorkspacesRequest, getUserWorkspacesSaga),
    takeLatest(actions.getWorkspaceByIdRequest, getWorkspaceSaga),
    takeLatest(actions.acceptInvitationRequest, acceptInvitationsSaga),
    takeLatest(actions.declineInvitationRequest, declineInvitationsSaga),
    takeLatest(actions.editProfileRequest, editProfileSaga),
    takeLatest(actions.setDefaultWorkspaceRequest, setDefaultWorkspaceSaga),
    takeLatest(actions.leaveWorkspaceRequest, leaveWorkspaceSaga),
    takeLatest(actions.editWorkspaceByIdRequest, editWorkspaceSaga),
  ]);
}
