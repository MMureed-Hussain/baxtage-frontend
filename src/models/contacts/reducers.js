import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  contacts: null,
  contact: null,
};

const reducer = createReducer(initialState, {
  [actions.getContactsRequest]: (state) => {
    state.loading = true;
  },
  [actions.getContactsSuccess]: (state, action) => {
    state.loading = false;
    state.contacts = action.payload.data;
  },
  [actions.getContactsFailure]: (state) => {
    state.loading = false;
  },
  [actions.getContactByIdSuccess]: (state, action) => {
    state.loading = false;
    state.contact = action.payload.data;
  },
  [actions.getContactByIdFailure]: (state) => {
    state.loading = false;
  },
  [actions.getContactByIdRequest]: (state) => {
    state.loading = true;
  },
  [actions.createContactRequest]: (state) => {
    state.loading = true;
  },
  [actions.createContactSuccess]: (state) => {
    state.loading = false;
  },
  [actions.createContactFailure]: (state) => {
    state.loading = false;
  },
  [actions.searchContactByNameRequest]: (state) => {
    state.loading = true;
  },
  [actions.searchContactByNameFailure]: (state) => {
    state.loading = false;
  },
  [actions.searchContactByNameSuccess]: (state, action) => {
    state.loading = false;
    state.search = action.payload.data;
  },
});

const loading = (state) => state.contacts.loading;
const contacts = (state) => state.contacts.contacts;
const contact = (state) => state.contacts.contact;
const search = (state) => state.contacts.search;

const selectors = {
  loading,
  contacts,
  contact,
  search,
};

export { initialState, reducer, selectors };
export default reducer;
