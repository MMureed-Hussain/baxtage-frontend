import { createAction } from '@reduxjs/toolkit';

export const getMembersRequest = createAction('GET_MEMBERS_REQUEST');
export const getMembersSuccess = createAction('GET_MEMBERS_SUCCESS');
export const getMembersFailure = createAction('GET_MEMBERS_FAILURE');

export const getInvitationsRequest = createAction('GET_INVITATIONS_REQUEST');
export const getInvitationsSuccess = createAction('GET_INVITATIONS_SUCCESS');
export const getInvitationsFailure = createAction('GET_INVITATIONS_FAILURE');

export const cancelInvitationRequest = createAction('CANCEL_INVITATION_REQUEST');
export const cancelInvitationSuccess = createAction('CANCEL_INVITATION_SUCCESS');
export const cancelInvitationFailure = createAction('CANCEL_INVITATION_FAILURE');

export const removeMemberRequest = createAction('REMOVE_MEMBER_REQUEST');
export const removeMemberSuccess = createAction('REMOVE_MEMBER_SUCCESS');
export const removeMemberFailure = createAction('REMOVE_MEMBER_FAILURE');

export const changeRoleRequest = createAction('CHANGE_ROLE_REQUEST');
export const changeRoleSuccess = createAction('CHANGE_ROLE_SUCCESS');
export const changeRoleFailure = createAction('CHANGE_ROLE_FAILURE');

export const inviteMemberRequest = createAction('INVITE_MEMBER_REQUEST');
export const inviteMemberSuccess = createAction('INVITE_MEMBER_SUCCESS');
export const inviteMemberFailure = createAction('INVITE_MEMBER_FAILURE');
