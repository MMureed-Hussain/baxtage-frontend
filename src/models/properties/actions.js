import { createAction } from '@reduxjs/toolkit';

export const getPropertiesRequest = createAction('GET_PROPERTIES_REQUEST');
export const getPropertiesSuccess = createAction('GET_PROPERTIES_SUCCESS');
export const getPropertiesFailure = createAction('GET_PROPERTIES_FAILURE');

export const editPropertyRequest = createAction('EDIT_PROPERTY_REQUEST');
export const editPropertySuccess = createAction('EDIT_PROPERTY_SUCCESS');
export const editPropertyFailure = createAction('EDIT_PROPERTY_FAILURE');

export const searchPropertiesRequest = createAction('SEARCH_PROPERTIES_REQUEST');
export const searchPropertiesSuccess = createAction('SEARCH_PROPERTIES_SUCCESS');
export const searchPropertiesFailure = createAction('SEARCH_PROPERTIES_FAILURE');

export const createPropertyRequest = createAction('CREATE_PROPERTY_REQUEST');
export const createPropertySuccess = createAction('CREATE_PROPERTY_SUCCESS');
export const createPropertyFailure = createAction('CREATE_PROPERTY_FAILURE');

export const getPropertyRequest = createAction('GET_PROPERTY_REQUEST');
export const getPropertySuccess = createAction('GET_PROPERTY_SUCCESS');
export const getPropertyFailure = createAction('GET_PROPERTY_FAILURE');
