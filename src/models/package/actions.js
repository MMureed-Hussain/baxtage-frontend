import { createAction } from '@reduxjs/toolkit';

export const getPackagesRequest = createAction('GET_PACKAGES_REQUEST');
export const getPackagesSuccess = createAction('GET_PACKAGES_SUCCESS');
export const getPackagesFailure = createAction('GET_PACKAGES_FAILURE');
