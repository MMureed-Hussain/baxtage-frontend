import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  defaultWorkspace: null,
  workspaces: null,
};

const reducer = createReducer(initialState, {
  [actions.sendOtpRequest]: (state) => {
    state.loading = true;
  },
  [actions.sendOtpFailure]: (state, action) => {
    state.loading = false;
  },
  [actions.sendOtpSuccess]: (state, action) => {
    state.loading = false;
  },
  [actions.setDefaultWorkspace]: (state, action) => {
    state.defaultWorkspace = action.payload;
  },
});

const loading = (state) => state.auth.loading;
const defaultWorkspace = (state) => state.auth.defaultWorkspace;
const workspaces = (state) => state.auth.workspaces;

const selectors = {
  loading,
  defaultWorkspace,
  workspaces,
};

export { initialState, reducer, selectors };
export default reducer;
