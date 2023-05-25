import { FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors as utilSelectors } from '../models/utils/reducers';
import useLocales from '../hooks/useLocales';
import * as utilActions from '../models/utils/actions';

const LocationSelector = ({ formik, row, ...props }) => {
  const {
    translate,
    currentLang: { value: languageCode },
  } = useLocales();
  const dispatch = useDispatch();

  const countries = useSelector(utilSelectors.countries);
  const cities = useSelector(utilSelectors.cities);

  useEffect(() => {
    dispatch(utilActions.getCountriesRequest());
  }, []);

  useEffect(() => {
    if (formik.values.country) {
      dispatch(utilActions.getCitiesByCountryIdRequest(formik.values.country));
    }
  }, [formik.values.country]);

  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12} md={row ? 8 : 12}>
        <FormControl error={formik.touched.country && formik.errors.country} required fullWidth>
          <InputLabel id="country-select">{translate('Country')}</InputLabel>
          <Select
            name="country"
            labelId="country-select"
            label={translate('country')}
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            {!!countries &&
              countries.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {languageCode === 'ar' ? c.name_ar : c.name_en}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={row ? 4 : 12}>
        <FormControl error={formik.touched.city && formik.errors.city} sx={{ minWidth: 200 }} required fullWidth>
          <InputLabel id="city-select">{translate('city')}</InputLabel>
          <Select
            name="city"
            labelId="city-select"
            label={translate('city')}
            onChange={formik.handleChange}
            value={formik.values.city_id}
          >
            {!!cities &&
              cities.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {languageCode === 'ar' ? c.name_ar : c.name_en}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default LocationSelector;
