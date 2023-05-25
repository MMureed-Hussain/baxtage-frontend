/* eslint-disable import/no-named-as-default */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import TeamServices from './services';

export function* getMembersSaga() {
  try {
    const response = yield call(TeamServices.getMembers);
    yield put(actions.getMembersSuccess(response.data));
  } catch (err) {
    yield put(actions.getMembersFailure(err));
  }
}

export function* getInvitationsSaga() {
  try {
    const response = yield call(TeamServices.getInvitations);
    yield put(actions.getInvitationsSuccess(response.data));
  } catch (err) {
    yield put(actions.getInvitationsFailure(err));
  }
}

export function* cancelInvitationSaga({ payload }) {
  try {
    const response = yield call(TeamServices.cancelInvitation, payload.id);
    yield put(actions.cancelInvitationSuccess(response.data));
  } catch (err) {
    yield put(actions.cancelInvitationFailure(err));
  }
}

export function* removeMemberSaga({ payload }) {
  try {
    const response = yield call(TeamServices.removeMember, payload.member_id);
    yield put(actions.removeMemberSuccess(response.data));
  } catch (err) {
    yield put(actions.removeMemberFailure(err));
  }
}

export function* changeRoleSaga({ payload }) {
  try {
    const response = yield call(TeamServices.changeRole, payload);
    yield put(actions.changeRoleSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.changeRoleFailure(err));
    payload?.callback?.('error');
  }
}

export function* inviteMemberSaga({ payload }) {
  try {
    const response = yield call(TeamServices.inviteMember, payload);
    yield put(actions.inviteMemberSuccess(response.data));
    payload?.callback?.('success');
  } catch (err) {
    yield put(actions.inviteMemberFailure(err));
    payload?.callback?.('error');
  }
}

export function* teamSaga() {
  yield all([
    takeLatest(actions.getMembersRequest, getMembersSaga),
    takeLatest(actions.getInvitationsRequest, getInvitationsSaga),
    takeLatest(actions.cancelInvitationRequest, cancelInvitationSaga),
    takeLatest(actions.removeMemberRequest, removeMemberSaga),
    takeLatest(actions.changeRoleRequest, changeRoleSaga),
    takeLatest(actions.inviteMemberRequest, inviteMemberSaga),
  ]);
}
