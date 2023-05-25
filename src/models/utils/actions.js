import { createAction } from '@reduxjs/toolkit';

export const getRegionsRequest = createAction('GET_REGIONS_REQUEST');
export const getRegionsSuccess = createAction('GET_REGIONS_SUCCESS');
export const getRegionsFailure = createAction('GET_REGIONS_FAILURE');

export const getDistrictsByCityIdRequest = createAction('GET_DISTRICT_BY_CITY_ID_REQUEST');
export const getDistrictsByCityIdSuccess = createAction('GET_DISTRICT_BY_CITY_ID_SUCCESS');
export const getDistrictsByCityIdFailure = createAction('GET_DISTRICT_BY_CITY_ID_FAILURE');

export const getCitiesByCountryIdRequest = createAction('GET_CITIES_BY_COUNTRY_ID_REQUEST');
export const getCitiesByCountryIdSuccess = createAction('GET_CITIES_BY_COUNTRY_ID_SUCCESS');
export const getCitiesByCountryIdFailure = createAction('GET_CITIES_BY_COUNTRY_ID_FAILURE');

export const getCountriesRequest = createAction('GET_COUNTRIES_REQUEST');
export const getCountriesSuccess = createAction('GET_COUNTRIES_SUCCESS');
export const getCountriesFailure = createAction('GET_COUNTRIES_FAILURE');
