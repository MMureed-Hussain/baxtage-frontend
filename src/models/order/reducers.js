import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  orders: null,
};

const reducer = createReducer(initialState, {
  [actions.getOrdersRequest]: (state) => {
    state.loading = true;
    console.log('orders requested');
  },
  [actions.getOrdersSuccess]: (state, action) => {
    state.loading = false;
    state.orders = action.payload.data;
    console.log('orders success');
  },
  [actions.getOrdersFailure]: (state, action) => {
    state.loading = false;
    console.log(action, 'orders error');
  },
  [actions.cancelOrderRequest]: (state) => {
    state.loading = true;
  },
  [actions.cancelOrderSuccess]: (state) => {
    state.loading = false;
  },
  [actions.cancelOrderFailure]: (state) => {
    state.loading = false;
  },
});

const loading = (state) => state.orders.loading;
const orders = (state) => state.orders.orders;

const selectors = {
  loading,
  orders,
};

export { initialState, reducer, selectors };
export default reducer;
