import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  cityData: null,
};

const reducer = createReducer(initialState, {
  [actions.getCityItemsRequest]: (state) => {
    state.loading = true;
    console.log('cities requested');
  },
  [actions.getCityItemsSuccess]: (state, action) => {
    state.loading = false;
    state.cityData = action.payload.data;
    console.log('cities success');
  },
  [actions.getCityItemsFailure]: (state, action) => {
    state.loading = false;
    console.log(action, 'cities error');
  },
});

const loading = (state) => state.city.loading;
const cityData = (state) => state.city.cityData;

const selectors = {
  loading,
  cityData,
};

export { initialState, reducer, selectors };
export default reducer;
