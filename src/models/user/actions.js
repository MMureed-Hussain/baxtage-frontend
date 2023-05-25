import { createAction } from '@reduxjs/toolkit';

export const getUserInformationRequest = createAction('GET_USER_INFORMATION_REQUEST');
export const getUserInformationSuccess = createAction('GET_USER_INFORMATION_SUCCESS');
export const getUserInformationFailure = createAction('GET_USER_INFORMATION_FAILURE');

export const getUserInvitationsRequest = createAction('GET_USER_INVITATIONS_REQUEST');
export const getUserInvitationsSuccess = createAction('GET_USER_INVITATIONS_SUCCESS');
export const getUserInvitationsFailure = createAction('GET_USER_INVITATIONS_FAILURE');

export const getUserWorkspacesRequest = createAction('GET_USER_WORKSPACES_REQUEST');
export const getUserWorkspacesSuccess = createAction('GET_USER_WORKSPACES_SUCCESS');
export const getUserWorkspacesFailure = createAction('GET_USER_WORKSPACES_FAILURE');

export const getWorkspaceByIdRequest = createAction('GET_WORKSPACE_BY_ID_REQUEST');
export const getWorkspaceByIdSuccess = createAction('GET_WORKSPACE_BY_ID_SUCCESS');
export const getWorkspaceByIdFailure = createAction('GET_WORKSPACE_BY_ID_FAILURE');

export const editWorkspaceByIdRequest = createAction('EDIT_WORKSPACE_BY_ID_REQUEST');
export const editWorkspaceByIdSuccess = createAction('EDIT_WORKSPACE_BY_ID_SUCCESS');
export const editWorkspaceByIdFailure = createAction('EDIT_WORKSPACE_BY_ID_FAILURE');

export const setDefaultWorkspaceRequest = createAction('SET_DEFAULT_WORKSPACE_REQUEST');
export const setDefaultWorkspaceSuccess = createAction('SET_DEFAULT_WORKSPACE_SUCCESS');
export const setDefaultWorkspaceFailure = createAction('SET_DEFAULT_WORKSPACE_FAILURE');

export const leaveWorkspaceRequest = createAction('LEAVE_WORKSPACE_REQUEST');
export const leaveWorkspaceSuccess = createAction('LEAVE_WORKSPACE_SUCCESS');
export const leaveWorkspaceFailure = createAction('LEAVE_WORKSPACE_FAILURE');

export const acceptInvitationRequest = createAction('ACCEPT_INVITATION_REQUEST');
export const acceptInvitationSuccess = createAction('ACCEPT_INVITATION_SUCCESS');
export const acceptInvitationFailure = createAction('ACCEPT_INVITATION_FAILURE');

export const declineInvitationRequest = createAction('DECLINE_INVITATION_REQUEST');
export const declineInvitationSuccess = createAction('DECLINE_INVITATION_SUCCESS');
export const declineInvitationFailure = createAction('DECLINE_INVITATION_FAILURE');

export const editProfileRequest = createAction('EDIT_PROFILE_REQUEST');
export const editProfileSuccess = createAction('EDIT_PROFILE_SUCCESS');
export const editProfileFailure = createAction('EDIT_PROFILE_FAILURE');
