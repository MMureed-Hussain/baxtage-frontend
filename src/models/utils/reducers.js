import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  loading: false,
  regions: null,
  districts: null,
  countries: null,
  cities: null,
};

const loading = (state) => state.utils.loading;
const regions = (state) => state.utils.regions;
const districts = (state) => state.utils.districts;
const countries = (state) => state.utils.countries;
const cities = (state) => state.utils.cities;

const selectors = {
  loading,
  regions,
  districts,
  countries,
  cities,
};

const reducer = createReducer(initialState, {
  [actions.getRegionsRequest]: (state) => {
    state.loading = true;
  },
  [actions.getRegionsSuccess]: (state, action) => {
    state.loading = false;
    state.regions = action.payload.data;
  },
  [actions.getRegionsFailure]: (state) => {
    state.loading = false;
  },
  [actions.getDistrictsByCityIdRequest]: (state) => {
    state.loading = true;
  },
  [actions.getDistrictsByCityIdSuccess]: (state, action) => {
    state.loading = false;
    state.districts = action.payload.data;
  },
  [actions.getDistrictsByCityIdFailure]: (state) => {
    state.loading = false;
  },
  [actions.getCountriesRequest]: (state) => {
    state.loading = false;
  },
  [actions.getCountriesSuccess]: (state, action) => {
    state.loading = false;
    state.countries = action.payload.data;
  },
  [actions.getCountriesFailure]: (state) => {
    state.loading = false;
  },
  [actions.getCitiesByCountryIdRequest]: (state) => {
    state.loading = false;
  },
  [actions.getCitiesByCountryIdFailure]: (state) => {
    state.loading = false;
  },
  [actions.getCitiesByCountryIdSuccess]: (state, action) => {
    state.loading = false;
    state.cities = action.payload.data;
  },
});

export { initialState, reducer, selectors };
export default reducer;
