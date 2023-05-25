import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import useLocales from '../../hooks/useLocales';
import NumberInput from '../../components/NumbeInput';
import PropertyImagesSelector from './PropertyImagesSelector';
import CoverPictureSelector from './CoverPictureSelector';
import * as utilActions from '../../models/utils/actions';
import { selectors as utilSelectors } from '../../models/utils/reducers';
import LocationSelector from '../../components/LocationSelector';

const commonFieldsProps = {
  InputLabelProps: {
    shrink: true,
  },
};

const PropertyForm = ({ formik }) => {
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
    if (formik.values.country_id) {
      dispatch(utilActions.getCitiesByCountryIdRequest(formik.values.country_id));
    }
  }, [formik.values.country_id]);
  const numberInputFeatures = [
    {
      name: 'bedrooms',
      label: 'Bedrooms',
      error: formik.touched.bedrooms && formik.errors.bedrooms,
      value: formik.values.bedrooms,
    },
    {
      name: 'bathrooms',
      label: 'Bathrooms',
      error: formik.touched.bathrooms && formik.errors.bathrooms,
      value: formik.values.bathrooms,
    },
    {
      name: 'number_of_floors',
      label: 'Floors',
      error: formik.touched.number_of_floors && formik.errors.number_of_floors,
      value: formik.values.number_of_floors,
    },
    {
      name: 'unit_floor_number',
      label: 'Floor number',
      error: formik.touched.unit_floor_number && formik.errors.unit_floor_number,
      value: formik.values.unit_floor_number,
    },
    {
      name: 'daily_living_room',
      label: 'Daily living room',
      error: formik.touched.daily_living_room && formik.errors.daily_living_room,
      value: formik.values.daily_living_room,
    },
    {
      name: 'formal_living_room',
      label: 'Formal living room',
      error: formik.touched.formal_living_room && formik.errors.formal_living_room,
      value: formik.values.formal_living_room,
    },
    {
      name: 'dining_rooms',
      label: 'Dining rooms',
      error: formik.touched.dining_rooms && formik.errors.dining_rooms,
      value: formik.values.dining_rooms,
    },
    {
      name: 'maid_rooms',
      label: 'Maid rooms',
      error: formik.touched.maid_rooms && formik.errors.maid_rooms,
      value: formik.values.maid_rooms,
    },
    {
      name: 'driver_rooms',
      label: 'Driver rooms',
      error: formik.touched.driver_rooms && formik.errors.driver_rooms,
      value: formik.values.driver_rooms,
    },
    {
      name: 'majlis_rooms',
      label: 'Detach majlis',
      error: formik.touched.majlis_rooms && formik.errors.majlis_rooms,
      value: formik.values.majlis_rooms,
    },
    {
      name: 'storage_rooms',
      label: 'Storage rooms',
      error: formik.touched.storage_rooms && formik.errors.storage_rooms,
      value: formik.values.storage_rooms,
    },
    {
      name: 'basement_rooms',
      label: 'Basement',
      error: formik.touched.basement_rooms && formik.errors.basement_rooms,
      value: formik.values.basement_rooms,
    },
    { name: 'pools', label: 'Pool', error: formik.touched.pools && formik.errors.pools, value: formik.values.pools },
    {
      name: 'balconies',
      label: 'Balcony',
      error: formik.touched.balconies && formik.errors.balconies,
      value: formik.values.balconies,
    },
    {
      name: 'kitchens',
      label: 'Kitchens',
      error: formik.touched.kitchens && formik.errors.kitchens,
      value: formik.values.kitchens,
    },
    {
      name: 'gardens',
      label: 'Gardens',
      error: formik.touched.gardens && formik.errors.gardens,
      value: formik.values.gardens,
    },
    {
      name: 'elevators',
      label: 'Elevators',
      error: formik.touched.elevators && formik.errors.elevators,
      value: formik.values.elevators,
    },
    {
      name: 'parking_spots',
      label: 'Parking bay',
      error: formik.touched.parking_spots && formik.errors.parking_spots,
      value: formik.values.parking_spots,
    },
  ];

  return (
    <form>
      <Grid
        container
        spacing={2}
        sx={{
          '& .MuiFormHelperText-root': {
            textAlign: 'end',
          },
        }}
      >
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {translate('Facts')}
                  </Typography>

                  <Box sx={{ pt: 3, pb: 3, mt: 2 }}>
                    <Grid container spacing={4}>
                      <Grid item xs={4}>
                        <TextField
                          {...commonFieldsProps}
                          name="purpose"
                          label={translate('purpose')}
                          error={formik.touched.purpose && formik.errors.purpose}
                          value={formik.values.purpose}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          {...commonFieldsProps}
                          name="category"
                          label={translate('category')}
                          error={formik.touched.category && formik.errors.category}
                          value={formik.values.category}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          {...commonFieldsProps}
                          name="type"
                          label={translate('listingType')}
                          error={formik.touched.type && formik.errors.type}
                          value={formik.values.type}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {translate('sellingPrice')}
                  </Typography>

                  <Box sx={{ pt: 3, pb: 3, mt: 2 }}>
                    <Grid container spacing={4}>
                      <Grid item xs={4}>
                        <NumberInput
                          name="price"
                          label={translate('price')}
                          error={formik.touched.price && formik.errors.price}
                          value={formik.values.price}
                          showControls={false}
                          shrink={false}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <NumberInput
                          name="vat"
                          label={translate('VAT')}
                          error={formik.touched.vat && formik.errors.vat}
                          value={formik.values.vat}
                          shrink={false}
                          showControls={false}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <NumberInput
                          name="fee"
                          label={translate('Fee')}
                          error={formik.touched.fee && formik.errors.fee}
                          value={formik.values.fee}
                          shrink={false}
                          showControls={false}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <PropertyImagesSelector formik={formik} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {translate('features')}
                  </Typography>

                  <Box sx={{ pt: 3, pb: 3, mt: 2 }}>
                    <Grid container spacing={2} rowSpacing={6}>
                      <Grid item xs={12} sm={6} md={4}>
                        <NumberInput
                          shrink={false}
                          showControls={false}
                          label={translate('area')}
                          name="area"
                          onChange={formik.handleChange}
                          fullWidth
                          value={formik.values.area}
                          error={formik.touched.area && formik.errors.area}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <NumberInput
                          shrink={false}
                          showControls={false}
                          label={translate('streetWidth')}
                          name="street_width"
                          fullWidth
                          onChange={formik.handleChange}
                          value={formik.values.street_width}
                          error={formik.touched.street_width && formik.errors.street_width}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <FormControl fullWidth>
                          <InputLabel id="deal-facade">Facade</InputLabel>
                          <Select
                            name="facade"
                            label="Facade"
                            labelId="deal-facade"
                            value={formik.values.facade}
                            error={formik.touched.facade && formik.errors.facade}
                            onChange={formik.handleChange}
                          >
                            <MenuItem value="north">North</MenuItem>
                            <MenuItem value="east">East</MenuItem>
                            <MenuItem value="west">West</MenuItem>
                            <MenuItem value="south">South</MenuItem>
                            <MenuItem value="north_east">North east</MenuItem>
                            <MenuItem value="north_west">North west</MenuItem>
                            <MenuItem value="south_east">South east</MenuItem>
                            <MenuItem value="south_west">South west</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <NumberInput
                          shrink={false}
                          showControls={false}
                          label={translate('propertyLength')}
                          name="length"
                          fullWidth
                          onChange={formik.handleChange}
                          error={formik.touched.length && formik.errors.length}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <NumberInput
                          shrink={false}
                          showControls={false}
                          label={translate('propertyWidth')}
                          name="width"
                          onChange={formik.handleChange}
                          error={formik.touched.width && formik.errors.width}
                          fullWidth
                        />
                      </Grid>

                      <Grid
                        item
                        lg={3}
                        sx={(theme) => ({
                          [theme.breakpoints.down('lg')]: {
                            display: 'none',
                          },
                        })}
                      />

                      {numberInputFeatures.map((props, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                          <NumberInput fullWidth showControls positive value={0} {...props} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" paragraph sx={{ mb: 4 }}>
                    {translate('properties.Status')}
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormControl fullWidth error={formik.touched.facade && formik.errors.facade}>
                        <InputLabel id="stage-label" shrink>
                          Stage
                        </InputLabel>
                        <Select
                          value={formik.values.stage}
                          label="Stage"
                          labelId="stage"
                          input={<OutlinedInput notched name="stage" label="Stage" />}
                        >
                          <MenuItem value="new">New</MenuItem>
                          <MenuItem value="visit">Visit</MenuItem>
                          <MenuItem value="negotiation">Negotiation</MenuItem>
                          <MenuItem value="won">Won</MenuItem>
                          <MenuItem value="lost">Lost</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth error={formik.touched.sales_person && formik.errors.sales_person}>
                        <InputLabel id="sales-person-label" shrink>
                          Sales person
                        </InputLabel>
                        <Select
                          value={formik.values.sales_person}
                          label="Sales person"
                          labelId="sales-person-label"
                          input={<OutlinedInput notched name="Sales person" label="Sales person" />}
                        >
                          <MenuItem value={0}>0</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {translate('propertyOwner')}
                  </Typography>

                  <Box>
                    <Typography variant="h6" paragraph sx={{ mb: 4 }}>
                      {translate('deals.preferredLocation')}
                      SEARCH BY OWNER NAME
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <CoverPictureSelector formik={formik} />
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {translate('sellingPrice')}
                  </Typography>

                  <Box>
                    <Typography variant="h6" paragraph sx={{ mb: 4 }}>
                      {translate('deals.preferredLocation')}
                      <LocationSelector formik={formik} />
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PropertyForm;
