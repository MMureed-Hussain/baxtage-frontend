import { Typography, Box, styled } from '@mui/material';

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.mode === 'light' ? '#161C24' : null,
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  marginTop: '10px',
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '30px',
  alignSelf: 'center',
}));

export const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  minWidth: '60vw',
}));
