import { Box, Button, Typography } from '@mui/material';
import { useRef } from 'react';
import ImageSelector from '../../components/ImageSelector';
import SelectPhotosImage from '../../components/SelectPhotosImage';

const PropertyImagesSelector = ({ formik }) => {
  const onFiles = (files) => {
    console.log(files);
  };

  const BrowseButton = ({ handleBrowse }) => (
    <Button onClick={handleBrowse} sx={{ textDecoration: 'underline' }}>
      browse
    </Button>
  );

  return (
    <ImageSelector
      onFiles={onFiles}
      name="photos"
      value={formik.values.photos}
      error={formik.touched.photos && formik.errors.photos}
      multiple
    >
      {(isDraggingOver, handleBrowse) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box height={120} width={160}>
            <SelectPhotosImage />
          </Box>
          <Box>
            <Typography variant="h6">Select photos</Typography>
            <Typography sx={{ color: '#637381' }}>
              Drop files here or click to <BrowseButton handleBrowse={handleBrowse} /> through your machine
            </Typography>
          </Box>
        </Box>
      )}
    </ImageSelector>
  );
};

export default PropertyImagesSelector;
