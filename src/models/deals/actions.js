import { createAction } from '@reduxjs/toolkit';

export const getDealsRequest = createAction('GET_PROPERTIES_REQUEST');
export const getDealsSuccess = createAction('GET_PROPERTIES_SUCCESS');
export const getDealsFailure = createAction('GET_PROPERTIES_FAILURE');

export const editDealRequest = createAction('EDIT_PROPERTY_REQUEST');
export const editDealSuccess = createAction('EDIT_PROPERTY_SUCCESS');
export const editDealFailure = createAction('EDIT_PROPERTY_FAILURE');

export const getDealByIdRequest = createAction('GET_DEAL_BY_ID_REQUEST');
export const getDealByIdSuccess = createAction('GET_DEAL_BY_ID_SUCCESS');
export const getDealByIdFailure = createAction('GET_DEAL_BY_ID_FAILURE');

export const createDealRequest = createAction('CREATE_DEAL_REQUEST');
export const createDealSuccess = createAction('CREATE_DEAL_SUCCESS');
export const createDealFailure = createAction('CREATE_DEAL_FAILURE');
