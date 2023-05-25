import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from './Image';
import BedIcon from './Icons/BedIcon';
import BathIcon from './Icons/BathIcon';
import useLocales from '../hooks/useLocales';

const PropertyCard = ({ property, row = false, children }) => {
  const {
    currentLang: { value: languageCode },
  } = useLocales();

  const districtName = languageCode === 'ar' ? property.district?.name_ar : property.district?.name_en;
  const cityName = languageCode === 'ar' ? property.city?.name_ar : property.city?.name_en;
  const countryName = languageCode === 'ar' ? property.country?.name_ar : property.country?.name_en;

  return (
    <Card>
      <CardContent
        sx={{
          p: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: row ? 'row' : 'column' }}>
          <Image src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1">
              {property.type} for {property.purpose}
            </Typography>
            {districtName && cityName && countryName && (
              <Typography paragraph variant="body1" sx={{ fontSize: '1rem' }}>
                {districtName}, {cityName}, {countryName}
              </Typography>
            )}

            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                <BedIcon />
                <Typography paragraph>{property.bedrooms}</Typography>
                <Typography paragraph sx={{ ml: 0.5 }}>
                  Bedrooms
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', ml: 1 }}>
                <BathIcon />
                <Box sx={{ display: 'flex', ml: 1 }}>
                  <Typography paragraph>{property.bathrooms}</Typography>
                  <Typography paragraph sx={{ ml: 0.5 }}>
                    Bathrooms
                  </Typography>
                </Box>
              </Box>
            </Box>
            {children}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCard;
