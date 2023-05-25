import { Box } from '@mui/material';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';
import React from 'react';
import SearchIcon from './Icons/SearchIcon';
import useLocales from '../hooks/useLocales';

const QuickSearchToolbar = (props) => {
  const { translate } = useLocales();

  return (
    <Box sx={{ p: 3, background: '#FFF' }} {...props}>
      <GridToolbarQuickFilter
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        placeholder={translate('contact.searchLabel')}
        debounceMs={500}
        sx={{
          width: 1,
          border: '1px solid #919EAB44',
          borderRadius: 1,
          '& .MuiInput-root:before': {
            border: 'none',
          },
          '& .MuiInput-root:hover:before': {
            border: 'none !important',
          },
          '& .MuiInput-root::after': {
            border: 'none',
          },
          '& .MuiInput-root:hover': {
            border: 'none',
          },
          p: 1,
        }}
      />
    </Box>
  );
};

export default QuickSearchToolbar;
