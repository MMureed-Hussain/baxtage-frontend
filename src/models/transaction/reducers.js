import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  transactions: null,
};

const reducer = createReducer(initialState, {
  [actions.getTenantTransactionsRequest]: (state) => {
    console.log('transactions requested');
    state.loading = true;
  },
  [actions.getTenantTransactionsSuccess]: (state, action) => {
    console.log('transactions success');
    state.loading = false;
    state.me = action.payload.data;
  },
  [actions.getTenantTransactionsFailure]: (state, action) => {
    console.log('transactions error');
    state.loading = false;
  },
});

const loading = (state) => state.user.loading;
const transactions = (state) => state.transaction.transactions;

const selectors = {
  loading,
  transactions,
};

export { initialState, reducer, selectors };
export default reducer;
