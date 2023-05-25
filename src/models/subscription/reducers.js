import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  subscriptions: null,
  activeSubscription: null,
};

const reducer = createReducer(initialState, {
  [actions.getTenantSubscriptionsRequest]: (state) => {
    console.log('subscriptions requested');
    state.loading = true;
  },
  [actions.getTenantSubscriptionsSuccess]: (state, action) => {
    console.log('subscriptions success');
    state.loading = false;
    state.subscriptions = action.payload.data;
  },
  [actions.getTenantSubscriptionsFailure]: (state, action) => {
    console.log('subscriptions error');
    state.loading = false;
  },
  [actions.getActiveSubscriptionRequest]: (state) => {
    state.loading = false;
  },
  [actions.getActiveSubscriptionFailure]: (state) => {
    state.loading = false;
  },
  [actions.getActiveSubscriptionSuccess]: (state, action) => {
    state.loading = false;
    state.activeSubscription = action.payload.data;
  },
});

const loading = (state) => state.user.loading;
const subscriptions = (state) => state.subscription.subscriptions;
const activeSubscription = (state) => state.subscription.activeSubscription;

const selectors = {
  loading,
  subscriptions,
  activeSubscription,
};

export { initialState, reducer, selectors };
export default reducer;
