import { createAction } from '@reduxjs/toolkit';

export const getTenantSubscriptionsRequest = createAction('GET_TENANT_SUBSCRIPTIONS_REQUEST');
export const getTenantSubscriptionsSuccess = createAction('GET_TENANT_SUBSCRIPTIONS_SUCCESS');
export const getTenantSubscriptionsFailure = createAction('GET_TENANT_SUBSCRIPTIONS_FAILURE');

export const getActiveSubscriptionRequest = createAction('GET_ACTIVE_SUBSCRIPTION_REQUEST');
export const getActiveSubscriptionSuccess = createAction('GET_ACTIVE_SUBSCRIPTION_SUCCESS');
export const getActiveSubscriptionFailure = createAction('GET_ACTIVE_SUBSCRIPTION_FAILURE');

export const createSubscriptionOrderRequest = createAction('CREATE_SUBSCRIPTION_ORDER_REQUEST');
export const createSubscriptionOrderSuccess = createAction('CREATE_SUBSCRIPTION_ORDER_SUCCESS');
export const createSubscriptionOrderFailure = createAction('CREATE_SUBSCRIPTION_ORDER_FAILURE');

export const getOrderDetailsRequest = createAction('GET_ORDER_DETAILS_REQUEST');
export const getOrderDetailsSuccess = createAction('GET_ORDER_DETAILS_SUCCESS');
export const getOrderDetailsFailure = createAction('GET_ORDER_DETAILS_FAILURE');
