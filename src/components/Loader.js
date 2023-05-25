// @mui
import { Box, CircularProgress } from '@mui/material';

export const Loader = () => (
  <Box sx={{ display: 'flex', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
);
