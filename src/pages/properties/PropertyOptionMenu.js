import { MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocales from '../../hooks/useLocales';
import OptionsMenu from '../../components/OptionsMenu';

const PropertyOptionsMenu = ({ property }) => {
  const { translate } = useLocales();
  const navigate = useNavigate();

  const handleEditProperty = () => {
    navigate(`/properties/${property.id}`);
  };

  return (
    <OptionsMenu>
      <MenuItem onClick={handleEditProperty}>{translate('contacts.editProperty')}</MenuItem>
    </OptionsMenu>
  );
};

export default PropertyOptionsMenu;
