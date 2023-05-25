import { createAction } from '@reduxjs/toolkit';

export const getTenantTransactionsRequest = createAction('GET_TENANT_TRANSACTIONS_REQUEST');
export const getTenantTransactionsSuccess = createAction('GET_TENANT_TRANSACTIONS_SUCCESS');
export const getTenantTransactionsFailure = createAction('GET_TENANT_TRANSACTIONS_FAILURE');
