import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  members: null,
  invitations: null,
};

const reducer = createReducer(initialState, {
  [actions.getMembersRequest]: (state) => {
    console.log('members requested');
    state.loading = true;
  },
  [actions.getMembersSuccess]: (state, action) => {
    console.log('members success');
    state.loading = false;
    state.members = action.payload.data;
  },
  [actions.getMembersFailure]: (state, action) => {
    console.log('members error');
    state.loading = false;
  },

  [actions.getInvitationsRequest]: (state) => {
    console.log('invitations requested');
    state.loading = true;
  },
  [actions.getInvitationsSuccess]: (state, action) => {
    console.log('invitations success');
    state.loading = false;
    state.invitations = action.payload.data;
  },
  [actions.getInvitationsFailure]: (state, action) => {
    console.log('invitations error');
    state.loading = false;
  },
  [actions.cancelInvitationRequest]: (state) => {
    state.loading = true;
  },
  [actions.cancelInvitationSuccess]: (state) => {
    state.loading = false;
  },
  [actions.cancelInvitationFailure]: (state) => {
    state.loading = false;
  },
  [actions.changeRoleRequest]: (state) => {
    state.loading = true;
  },
  [actions.changeRoleSuccess]: (state) => {
    state.loading = false;
  },
  [actions.changeRoleFailure]: (state) => {
    state.loading = false;
  },
  [actions.inviteMemberRequest]: (state) => {
    state.loading = true;
  },
  [actions.inviteMemberSuccess]: (state) => {
    state.loading = false;
  },
  [actions.inviteMemberFailure]: (state) => {
    state.loading = false;
  },
});

const loading = (state) => state.team.loading;
const members = (state) => state.team.members;
const invitations = (state) => state.team.invitations;

const selectors = {
  loading,
  members,
  invitations,
};

export { initialState, reducer, selectors };
export default reducer;
