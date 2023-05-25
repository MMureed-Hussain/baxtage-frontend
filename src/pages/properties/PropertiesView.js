import React, { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
// @mui
import * as Yup from 'yup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
// hooks
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';

// components
import Page from '../../components/Page';

import { selectors as propertiesSelectors } from '../../models/properties/reducers';
import * as propertiesActions from '../../models/properties/actions';
import PropertyOptionMenu from './PropertyOptionMenu';
import PropertyCard from '../../components/PropertyCard';
import * as dealsActions from '../../models/deals/actions';
import AddPropertyModal from '../../components/AddPropertyModal';
// ----------------------------------------------------------------------

const propertyCreationSchema = Yup.object({
  category: Yup.string().oneOf(['commercial', 'residential']).required('required'),
  purpose: Yup.string().oneOf(['rent', 'sell']).required('Required'),
  type: Yup.string()
    .oneOf([
      'villa',
      'building_apartment',
      'villa_apartment',
      'land',
      'duplex',
      'townhouse',
      'mansion',
      'villa_floor',
      'farm',
      'istraha',
      'store',
      'office',
      'storage',
      'building',
    ])
    .required('Required'),
});

const GridViewIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="9" height="9" rx="2" fill="#212B36" />
      <rect x="11" width="9" height="9" rx="2" fill="#212B36" />
      <rect x="11" y="11" width="9" height="9" rx="2" fill="#212B36" />
      <rect y="11" width="9" height="9" rx="2" fill="#212B36" />
    </svg>
  );
};

const ListViewIcon = () => {
  return <MoreVertIcon />;
};

export default function PropertiesView() {
  const { themeStretch } = useSettings();
  const { translate } = useLocales();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listView, setListView] = useState(true);
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);

  const onViewChange = () => {
    setListView((value) => !value);
  };

  useEffect(() => {
    dispatch(propertiesActions.getPropertiesRequest());
  }, []);

  const properties = useSelector(propertiesSelectors.properties);

  const callback = (type, r) => {
    if (type === 'success') {
      navigate(`/properties/${r.data.id}`);
    } else {
      toast(r.message, { type: 'error' });
    }
  };

  const formik = useFormik({
    validationSchema: propertyCreationSchema,
    initialValues: {
      tenant_contact_id: '',
      category: '',
      purpose: '',
      type: '',
    },
    onSubmit: (values) => {
      dispatch(propertiesActions.createPropertyRequest({ ...values, callback }));
      dispatch(propertiesActions.getPropertiesRequest());
      setShowAddPropertyModal(false);
    },
    validateOnMount: true,
  });

  const columns = [
    {
      field: 'id',
      headerName: '#',
      maxWidth: 100,
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'type',
      headerName: 'Type',
      maxWidth: 280,
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'purpose',
      headerName: 'Purpose',
      maxWidth: 180,
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'area',
      headerName: 'Area',
      headerClassName: 'datagrid-header',
      flex: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'district',
      headerName: 'District',
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'city',
      headerName: 'City',
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: true,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'useless',
      headerName: '',
      width: 50,
      renderCell: ({ row }) => <PropertyOptionMenu property={row} />,
      headerClassName: 'datagrid-header',
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <Page title={translate('properties')}>
      <AddPropertyModal
        open={showAddPropertyModal}
        formik={formik}
        onClose={() => setShowAddPropertyModal(false)}
        showSearchbar={false}
        isBuy={false}
        title={translate('properties.propertyCreation')}
      />
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" paragraph>
            {translate('properties')}
          </Typography>

          <Button
            variant="contained"
            sx={{ color: 'white', pt: 1, pb: 1 }}
            onClick={() => setShowAddPropertyModal(true)}
          >
            {translate('properties.addProperty')}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', w: 1, mb: 4 }}>
          <TextField fullWidth label="Search by ID" />
          <IconButton
            sx={{ p: 2, border: '1px solid rgba(145, 158, 171, 0.32)', borderRadius: '8px', ml: 2 }}
            onClick={onViewChange}
          >
            {listView ? <ListViewIcon /> : <GridViewIcon />}
          </IconButton>
        </Box>

        {listView ? (
          <Card sx={{ maxWidth: 0.9 }}>
            <CardContent sx={{ p: 0 }}>
              <Box>
                <DataGrid
                  columns={columns}
                  rows={properties || []}
                  disableColumnFilter
                  disableColumnSelector
                  hideFooterSelectedRowCount
                  disableSelectionOnClick
                  rowsPerPageOptions={[10]}
                  pageSize={10}
                  autoHeight
                  sx={{
                    '& .datagrid-header': {
                      backgroundColor: '#F4F6F8',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      borderRadius: 0,
                    },
                    border: 'none',
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Grid container spacing={2}>
            {properties &&
              properties.map((p, i) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                  <PropertyCard property={p}>
                    <Divider />
                    <Typography sx={{ mt: 1 }}>#{p.id}</Typography>
                  </PropertyCard>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Page>
  );
}
