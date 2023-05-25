import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  properties: null,
  property: null,
  search: null,
};

const reducer = createReducer(initialState, {
  [actions.getPropertiesRequest]: (state) => {
    console.log('properties requested');
    state.loading = true;
  },
  [actions.getPropertiesSuccess]: (state, action) => {
    console.log('properties success');
    state.loading = false;
    state.properties = action.payload.data;
  },
  [actions.getPropertiesFailure]: (state) => {
    console.log('properties error');
    state.loading = false;
  },
  [actions.editPropertyRequest]: (state) => {
    state.loading = true;
  },
  [actions.editPropertySuccess]: (state) => {
    state.loading = false;
  },
  [actions.editPropertyFailure]: (state) => {
    state.loading = false;
  },
  [actions.searchPropertiesRequest]: (state) => {
    state.loading = true;
  },
  [actions.searchPropertiesSuccess]: (state, action) => {
    state.loading = false;
    state.search = action.payload.data;
  },
  [actions.searchPropertiesFailure]: (state) => {
    state.loading = false;
  },
  [actions.createPropertyRequest]: (state) => {
    state.loading = false;
  },
  [actions.createPropertyFailure]: (state) => {
    state.loading = false;
  },
  [actions.createPropertySuccess]: (state, action) => {
    state.loading = false;
    state.property = action.payload.data;
  },
  [actions.getPropertyRequest]: (state) => {
    state.loading = true;
  },
  [actions.getPropertiesFailure]: (state) => {
    state.loading = false;
  },
  [actions.getPropertySuccess]: (state, action) => {
    state.loading = false;
    state.property = action.payload.data;
  },
});

const loading = (state) => state.properties.loading;
const properties = (state) => state.properties.properties;
const property = (state) => state.properties.property;
const search = (state) => state.properties.search;

const selectors = {
  loading,
  property,
  properties,
  search,
};

export { initialState, reducer, selectors };
export default reducer;
