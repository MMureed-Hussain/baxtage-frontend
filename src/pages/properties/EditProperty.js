import * as Yup from 'yup';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import useLocales from '../../hooks/useLocales';
import useSettings from '../../hooks/useSettings';
import Page from '../../components/Page';
import PropertyForm from './PropertyForm';
import { selectors as propertySelectors } from '../../models/properties/reducers';
import * as propertyActions from '../../models/properties/actions';

const propertyEditSchema = Yup.object({
  min_price: Yup.number().positive(),
  max_price: Yup.number().positive().moreThan(Yup.ref('min_price'), 'Max price must be more than Min price.'),
  facade: Yup.string().oneOf([
    'north',
    'east',
    'south',
    'west',
    'north_east',
    'north_west',
    'south_east',
    'south_west',
  ]),
  min_area: Yup.number(),
  max_area: Yup.number().moreThan(Yup.ref('min_area'), 'Max area must be more than Min area.'),
  bedrooms: Yup.number().positive().integer(),
  bathrooms: Yup.number().positive().integer(),
  country: Yup.number(),
  city: Yup.number(),
  districts: Yup.array().of(Yup.number()),
});

const EditProperty = () => {
  const { translate } = useLocales();
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector(propertySelectors.property);

  useEffect(() => {
    dispatch(propertyActions.getPropertyRequest(id));
  }, [id]);

  const formik = useFormik({
    initialValues: {
      type: property?.type,
      category: property?.category,
      purpose: property?.purpose,
      price: property?.price,
      vat: property?.vat,
      fee: property?.fee,
      public_view: property?.public_view,
      owner: property?.owner,
      cover_image_url: property?.cover_image_url,
      country: property?.country?.id,
      city: property?.city?.id,
      district: property?.district?.id,
      photos: property?.photos || [],
      area: property?.area || '',
      street_width: property?.street_width || '',
      facade: property?.facade || '',
      length: property?.length || '',
      width: property?.width || '',
      bedrooms: property?.bedrooms || 0,
      bathrooms: property?.bathrooms || 0,
      number_of_floors: property?.number_of_floors || 0,
      unit_floor_number: property?.unit_floor_number || 0,
      daily_living_room: property?.daily_living_room || 0,
      formal_living_room: property?.formal_living_room || 0,
      dining_rooms: property?.dining_rooms || 0,
      maid_rooms: property?.maid_rooms || 0,
      driver_rooms: property?.driver_rooms || 0,
      majlis_rooms: property?.majlis_rooms || 0,
      storage_rooms: property?.storage_rooms || 0,
      basement_rooms: property?.basement_rooms || 0,
      pools: property?.pools || 0,
      balconies: property?.balconies || 0,
      kitchens: property?.kitchens || 0,
      gardens: property?.gardens || 0,
      elevators: property?.elevators || 0,
      parking_spots: property?.parking_spots || 0,
    },
    isInitialValid: false,
    enableReinitialize: true,
    validationSchema: propertyEditSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Page title={translate('properties')}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" paragraph>
            {translate('properties')}
          </Typography>
        </Box>

        <PropertyForm formik={formik} />
      </Container>
    </Page>
  );
};

export default EditProperty;
