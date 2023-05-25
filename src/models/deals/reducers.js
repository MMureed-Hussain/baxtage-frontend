import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  deals: null,
  deal: null,
};

const reducer = createReducer(initialState, {
  [actions.getDealsRequest]: (state) => {
    console.log('deals requested');
    state.loading = true;
  },
  [actions.getDealsSuccess]: (state, action) => {
    console.log('deals success');
    state.loading = false;
    state.deals = action.payload.data;
  },
  [actions.getDealsFailure]: (state) => {
    console.log('deals error');
    state.loading = false;
  },
  [actions.editDealRequest]: (state) => {
    state.loading = true;
  },
  [actions.editDealSuccess]: (state, action) => {
    state.loading = false;
    state.deal = action.payload.data;
  },
  [actions.editDealFailure]: (state) => {
    state.loading = false;
  },
  [actions.getDealByIdRequest]: (state) => {
    state.loading = true;
  },
  [actions.getDealByIdSuccess]: (state, action) => {
    state.loading = false;
    state.deal = action.payload.data;
  },
  [actions.getDealByIdFailure]: (state) => {
    state.loading = false;
  },
  [actions.createDealSuccess]: (state, action) => {
    state.loading = false;
    state.deal = action.payload.data;
  },
  [actions.createDealFailure]: (state) => {
    state.loading = false;
  },
  [actions.createDealRequest]: (state) => {
    state.loading = true;
  },
});

const loading = (state) => state.deals.loading;
const deals = (state) => state.deals.deals;
const deal = (state) => state.deals.deal;

const selectors = {
  loading,
  deals,
  deal,
};

export { initialState, reducer, selectors };
export default reducer;
