import { Box, Input } from '@mui/material';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ImageSelector = ({ name, value, error, onChange, children, onDragOver, onFiles, multiple = false }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    setIsDraggingOver(true);

    if (onDragOver) {
      onDragOver(e);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const { files } = e.dataTransfer;
    onFiles(files);
  };

  const handleUpload = (e) => {
    if (onChange) {
      onChange(e);
    }
    onFiles(e.target.files);
  };

  return (
    <Box onDragOver={handleDragOver} onDragLeave={() => setIsDraggingOver(false)} onDrop={handleDrop}>
      <Input
        inputProps={{ multiple, accept: 'image/*' }}
        inputRef={fileInputRef}
        value={value}
        name={name}
        error={error}
        type="file"
        onChange={handleUpload}
        style={{ display: 'none' }}
        aria-hidden
        hidden
      />
      {children(isDraggingOver, handleBrowse)}
    </Box>
  );
};

ImageSelector.propTypes = {
  name: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onFiles: PropTypes.func,
};

export default ImageSelector;
