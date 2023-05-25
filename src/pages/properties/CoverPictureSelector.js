import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import ImageSelector from '../../components/ImageSelector';
import useLocales from '../../hooks/useLocales';
import useAsyncAction from '../../hooks/useAsyncAction';

const CoverPictureSelector = ({ formik }) => {
  const { translate } = useLocales();

  const [uploadCover, isLoading, data, error] = useAsyncAction(
    async (cover) => {
      // upload here
    },
    [formik.values.cover]
  );

  const handleCoverUpload = (files) => {
    uploadCover(files[0]);
  };

  return (
    <ImageSelector
      name="cover"
      error={formik.touched.cover && formik.errors.cover}
      value={formik.values.cover}
      onFiles={handleCoverUpload}
      multiple={false}
    >
      {(isDraggingOver, handleBrowse) => (
        <Card>
          <CardContent>
            <Typography variant="h5" paragraph marginBottom={5}>
              {translate('properties.coverPhoto')}
            </Typography>
            <Box
              sx={{
                cursor: 'pointer',
                minHeight: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
                border: '1px dashed #BCBCBC',
              }}
              onClick={handleBrowse}
            >
              <Typography sx={{ color: '#637381' }}>{isDraggingOver ? 'Drop your image' : 'Upload a cover'}</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </ImageSelector>
  );
};

export default CoverPictureSelector;
