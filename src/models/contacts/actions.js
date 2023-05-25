import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('GET_CONTACTS_REQUEST');
export const getContactsSuccess = createAction('GET_CONTACTS_SUCCESS');
export const getContactsFailure = createAction('GET_CONTACTS_FAILURE');

export const getContactByIdRequest = createAction('GET_CONTACT_BY_ID_REQUEST');
export const getContactByIdSuccess = createAction('GET_CONTACT_BY_ID_SUCCESS');
export const getContactByIdFailure = createAction('GET_CONTACT_BY_ID_FAILURE');

export const createContactRequest = createAction('CREATE_CONTACT_REQUEST');
export const createContactSuccess = createAction('CREATE_CONTACT_SUCCESS');
export const createContactFailure = createAction('CREATE_CONTACT_FAILURE');

export const editContactRequest = createAction('EDIT_CONTACT_REQUEST');
export const editContactSuccess = createAction('EDIT_CONTACT_SUCCESS');
export const editContactFailure = createAction('EDIT_CONTACT_FAILURE');

export const searchContactByNameRequest = createAction('SEARCH_CONTACTS_BY_NAME_REQUEST');
export const searchContactByNameSuccess = createAction('SEARCH_CONTACTS_BY_NAME_SUCCESS');
export const searchContactByNameFailure = createAction('SEARCH_CONTACTS_BY_NAME_FAILURE');
