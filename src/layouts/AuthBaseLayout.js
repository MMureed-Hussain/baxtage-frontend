// @mui
import { Box, Grid, useTheme } from '@mui/material';
// components
import { Heading, SubTitle, FieldsContainer } from './AuthBaseLayout.elements';

import NuzulLogo from '../assets/logo/logo_full.svg';

const AuthBaseLayout = ({ children, heading, subtitle }) => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <FieldsContainer>
          <Box sx={{ width: '73%' }}>
            <img
              src={theme.palette.mode === 'light' ? NuzulLogo : NuzulLogo}
              alt="Baxtage Logo"
              style={{ marginBottom: '35px' }}
            />
            <Heading variant="h2">{heading}</Heading>
            <SubTitle variant="subtitle1">{subtitle}</SubTitle>
          </Box>
          <Box sx={{ width: '72%' }}>{children}</Box>
        </FieldsContainer>
      </Grid>
      {/* <Grid item xs={12} md={5}>
      <Box alignSelf="center">
        <img src={AuthBanner} style={{ maxHeight: '100vh' }} alt="Banner" />
      </Box>
    </Grid> */}
    </Grid>
  );
};

export default AuthBaseLayout;
