// @mui
import { Button } from '@mui/material';

const AuthButton = ({ text, style, onButtonClick, fullWidth = true, type = 'submit', isDisabled = false }) => (
  <Button
    variant="contained"
    type={type}
    fullWidth={fullWidth}
    disabled={isDisabled}
    onClick={onButtonClick}
    sx={[style, { marginTop: '50px' }]}
  >
    {text}
  </Button>
);

export default AuthButton;
