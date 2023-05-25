import { createAction } from '@reduxjs/toolkit';

export const getOrdersRequest = createAction('GET_ORDERS_REQUEST');
export const getOrdersSuccess = createAction('GET_ORDERS_SUCCESS');
export const getOrdersFailure = createAction('GET_ORDERS_FAILURE');

export const cancelOrderRequest = createAction('CANCEL_ORDER_REQUEST');
export const cancelOrderSuccess = createAction('CANCEL_ORDER_SUCCESS');
export const cancelOrderFailure = createAction('CANCEL_ORDER_FAILURE');
