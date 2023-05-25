import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  packages: null,
};

const reducer = createReducer(initialState, {
  [actions.getPackagesRequest]: (state) => {
    console.log('packages requested');
    state.loading = true;
  },
  [actions.getPackagesSuccess]: (state, action) => {
    console.log('packages success');
    state.loading = false;
    state.packages = action.payload.data;
  },
  [actions.getPackagesFailure]: (state, action) => {
    console.log('packages error');
    state.loading = false;
  },
});

const loading = (state) => state.package.loading;
const packages = (state) => state.package.packages;

const selectors = {
  loading,
  packages,
};

export { initialState, reducer, selectors };
export default reducer;
