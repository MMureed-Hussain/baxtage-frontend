// @mui
import { Container, Typography, Box } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Projects() {
  const { themeStretch } = useSettings();
  const { translate } = useLocales();

  //
  return (
    <Page title="Projects">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" paragraph>
            Coming soon!
          </Typography>
        </Box>
      </Container>
    </Page>
  );
}
