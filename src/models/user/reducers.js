import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  me: null,
  invitations: null,
  workspaces: null,
  workspace: null,
};

const reducer = createReducer(initialState, {
  [actions.getUserInformationRequest]: (state) => {
    console.log('user requested');
    state.loading = true;
  },
  [actions.getUserInformationSuccess]: (state, action) => {
    console.log('user success');
    state.loading = false;
    state.me = action.payload.data;

    const { workspaces } = action.payload.data;
    localStorage.setItem('workspaces', JSON.stringify(workspaces));
    const tenantId = parseInt(localStorage.getItem('tenant_id'), 10);

    if (tenantId) {
      const currentWorkspace = workspaces.find((element) => element.id === tenantId);

      console.log('tenantId', tenantId);
      console.log('workspaces', workspaces);
      console.log('currentWorkspace', currentWorkspace);
      localStorage.setItem('tenant_url', currentWorkspace.domain);
      localStorage.setItem('tenant_role', currentWorkspace.company_role.role_id);
      localStorage.setItem('tenant_active', currentWorkspace.active);
    } else {
      let defaultWorkspace = workspaces.filter((workspace) => workspace.is_default === true);
      if (!defaultWorkspace.length) {
        defaultWorkspace = workspaces?.[0];
      }

      if (defaultWorkspace) {
        console.log('defaultWorkspace', defaultWorkspace[0]);

        localStorage.setItem('tenant_id', defaultWorkspace[0].id);
        localStorage.setItem('tenant_url', defaultWorkspace[0].domain);
        localStorage.setItem('tenant_role', defaultWorkspace[0].company_role.role_id);
        localStorage.setItem('tenant_active', defaultWorkspace[0].active);
      }
    }
  },
  [actions.getUserInformationFailure]: (state, action) => {
    console.log('user error', action);
    state.loading = false;
  },

  [actions.getUserInvitationsRequest]: (state) => {
    console.log('Invitations requested');
    state.loading = true;
  },
  [actions.getUserInvitationsSuccess]: (state, action) => {
    console.log('Invitations success');
    state.loading = false;
    state.invitations = action.payload.data;
  },
  [actions.getUserInvitationsFailure]: (state, action) => {
    console.log('Invitations error');
    state.loading = false;
  },

  [actions.getUserWorkspacesRequest]: (state) => {
    console.log('Workspaces requested');
    state.loading = true;
  },
  [actions.getUserWorkspacesSuccess]: (state, action) => {
    console.log('Workspaces success');
    state.loading = false;
    state.workspaces = action.payload.data;
  },
  [actions.getUserWorkspacesFailure]: (state, action) => {
    console.log('Workspaces error');
    state.loading = false;
  },

  [actions.getWorkspaceByIdRequest]: (state) => {
    console.log('Workspaces requested');
    state.loading = true;
  },
  [actions.getWorkspaceByIdSuccess]: (state, action) => {
    console.log('Workspaces success');
    state.loading = false;
    state.workspace = action.payload.data;
  },
  [actions.getWorkspaceByIdFailure]: (state, action) => {
    console.log('Workspaces error');
    state.loading = false;
  },
  [actions.editProfileRequest]: (state, action) => {
    state.loading = true;
  },
  [actions.editProfileSuccess]: (state, action) => {
    state.loading = false;
  },
  [actions.editProfileFailure]: (state, action) => {
    state.loading = false;
  },
  [actions.leaveWorkspaceRequest]: (state, action) => {
    state.loading = true;
  },
  [actions.leaveWorkspaceSuccess]: (state, action) => {
    state.loading = false;
  },
  [actions.leaveWorkspaceFailure]: (state, action) => {
    state.loading = false;
  },
});

const loading = (state) => state.user.loading;
const me = (state) => state.user.me;
const invitations = (state) => state.user.invitations;
const workspaces = (state) => state.user.workspaces;
const workspace = (state) => state.user.workspace;

const selectors = {
  loading,
  me,
  invitations,
  workspaces,
  workspace,
};

export { initialState, reducer, selectors };
export default reducer;
