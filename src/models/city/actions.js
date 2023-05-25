import { createAction } from '@reduxjs/toolkit';

export const getCityItemsRequest = createAction('GET_CITY_ITEMS_REQUEST');

export const getCityItemsSuccess = createAction('GET_CITY_ITEMS_SUCCESS');

export const getCityItemsFailure = createAction('GET_CITY_ITEMS_FAILURE');
