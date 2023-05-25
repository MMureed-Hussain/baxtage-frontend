import { useEffect } from 'react';

// @mui
import { Container, Typography } from '@mui/material';
// hooks
import { useNavigate } from 'react-router-dom';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';

// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Expired() {
  const { themeStretch } = useSettings();
  const { translate } = useLocales();
  const navigate = useNavigate();

  useEffect(() => {
    const hostname = window.location.host;
    console.log(hostname); // example.com
    const subdomain = hostname.split('.')[0];
    console.log(subdomain); // subdomain
  }, []);
  return (
    <Page title={translate('home')}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          {translate('home')}
        </Typography>
      </Container>
    </Page>
  );
}
