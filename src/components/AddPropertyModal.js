import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Autocomplete,
  Box,
  Button,
  debounce,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import * as contactActions from '../models/contacts/actions';
import { selectors as contactSelectors } from '../models/contacts/reducers';
import useLocales from '../hooks/useLocales';
import SearchIcon from './Icons/SearchIcon';

const AddPropertyModal = ({ formik, open, onClose, showSearchbar = true, isBuy = true, title }) => {
  const { translate } = useLocales();
  const dispatch = useDispatch();
  const search = useSelector(contactSelectors.search);
  const searchLoading = useSelector(contactSelectors.loading);

  const handleSearch = debounce((e) => {
    const input = e.target.value;
    dispatch(contactActions.searchContactByNameRequest(input));
  }, 500);

  const serializeOption = (opt) => `${opt.name} - ${opt.mobile_number}`;

  const residentialOnly = [
    { value: 'building_apartment', text: translate('deal.properties.building_apartment') },
    { value: 'villa_apartment', text: translate('deal.properties.villa_apartment') },
    { value: 'villa_floor', text: translate('deal.properties.villa_floor') },
    { value: 'townhouse', text: translate('deal.properties.townhouse') },
    { value: 'duplex', text: translate('deal.properties.duplex') },
    { value: 'villa', text: translate('deal.properties.villa') },
    { value: 'mansion', text: translate('deal.properties.mansion') },
  ];

  const commercialRentOnly = [
    {
      value: 'store',
      text: translate('deal.properties.store'),
    },
    {
      value: 'office',
      text: translate('deal.properties.office'),
    },
    {
      value: 'storage',
      text: translate('deal.properties.storage'),
    },
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 1, p: 2 }}>
        <Typography sx={{ p: 2, mb: 4 }} variant="h5">
          {title}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          {showSearchbar && (
            <Box sx={{ display: 'flex', w: 1, mb: 4 }}>
              <Autocomplete
                options={search || []}
                loading={!!searchLoading}
                getOptionLabel={serializeOption}
                filterOptions={(x) => x}
                fullWidth
                onInputChange={handleSearch}
                onChange={(e, v) => formik.setFieldValue('tenant_contact_id', v.id)}
                isOptionEqualToValue={(opt, value) => serializeOption(opt) === serializeOption(value)}
                renderInput={(params) => (
                  <TextField
                    name="tenant_contact_id"
                    error={formik.touched.tenant_contact_id && formik.errors.tenant_contact_id}
                    InputProps={{
                      ...(params.InputProps || {}),
                      startAdornment: <SearchIcon />,
                      type: 'search',
                    }}
                    value={formik.values.tenant_contact_id}
                    placeholder={translate('deal.searchLabel')}
                    {...params}
                  />
                )}
              />
            </Box>
          )}

          <FormControl
            sx={{ p: 1 }}
            error={formik.touched.category && !!formik.errors.category}
            onChange={formik.handleChange}
            fullWidth
          >
            <FormLabel sx={{ color: '#212B36' }}>{translate('deal.category')}</FormLabel>

            <RadioGroup name="category" row sx={{ pl: 1 }} value={formik.values.category}>
              <FormControlLabel label={translate('deal.commercial')} control={<Radio value="commercial" />} />
              <FormControlLabel label={translate('deal.residential')} control={<Radio value="residential" />} />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ p: 1 }}>
            <FormLabel sx={{ color: '#212B36' }}>{translate('deal.purpose')}</FormLabel>
            <RadioGroup
              name="purpose"
              defaultValue="rent"
              row
              sx={{ pl: 1 }}
              value={formik.values.purpose}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                label={translate('deal.rent')}
                onChange={formik.handleChange}
                control={<Radio value="rent" />}
              />
              <FormControlLabel
                label={translate(isBuy ? 'deal.buy' : 'deal.sell')}
                control={<Radio value={isBuy ? 'buy' : 'sell'} />}
                onChange={formik.handleChange}
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2, mb: 2 }} error={formik.touched.type && formik.errors.type}>
            <InputLabel id="deal-type">{translate('deal.realEstateType')}</InputLabel>
            <Select
              labelId="deal-type"
              input={<OutlinedInput notched name="type" label={'123456'} />}
              value={formik.values.type}
              onChange={formik.handleChange}
              disabled={!formik.values.purpose && !formik.values.category}
            >
              {formik.values.category === 'residential' &&
                residentialOnly.map((item, i) => (
                  <MenuItem key={i} value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}

              <MenuItem value="land">{translate('deal.properties.land')}</MenuItem>

              <MenuItem value="farm">{translate('deal.properties.farm')}</MenuItem>
              {formik.values.category === 'commercial' && (
                <MenuItem value="building">{translate('deal.properties.building')}</MenuItem>
              )}

              <MenuItem value="istraha">{translate('deal.properties.istraha')}</MenuItem>

              {formik.values.category === 'commercial' &&
                formik.values.purpose === 'rent' &&
                commercialRentOnly.map((item, i) => (
                  <MenuItem key={i} value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>

        <Divider />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button variant="outlined" sx={{ color: 'black', borderColor: '#919EAB66', mr: 2 }} onClick={onClose}>
            {translate('deal.cancelButton')}
          </Button>

          <Button disabled={!formik.isValid} variant="contained" sx={{ color: 'white' }} onClick={formik.submitForm}>
            {translate('deal.createButton')}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
export default AddPropertyModal;
