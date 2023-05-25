import { Box, Button, Divider, OutlinedInput, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useRef, useState } from 'react';

const commonStyles = {
  p: 0,
  height: 1,
  border: '1px solid #919eab52',
  borderRadius: 0,
};

const topButtonStyles = {
  borderBottom: 'none',
  borderLeft: 'none',
  borderTopRightRadius: '8px',
};

const bottomButtonStyles = {
  borderTop: 'none',
  borderLeft: 'none',
  borderBottomRightRadius: '8px',
};

const NumberInput = ({
  name,
  onChange,
  helperText,
  label,
  sx,
  showControls = true,
  flipControls = false,
  positive = true,
  shrink = true,
  fullWidth = false,
  value: defaultValue = '',
  required = false,
  ...props
}) => {
  if (positive && defaultValue < 0) {
    throw new Error(`Can't pass a defaultValue of ${defaultValue} while positive is true`);
  }

  if (!showControls && flipControls) {
    throw new Error("Can't set flipControls when showControls is set to false");
  }

  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }

    let re;

    if (positive) {
      re = /^\d*\.?\d*$/; // +ve decimal
    } else {
      re = /^-\d*\.?\d*$/; // -ve decimal
    }

    if (re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const increment = () => {
    setValue((v) => (v || 0) + 1);
  };

  const decrement = () => {
    if (positive && value <= 0) return;
    setValue((v) => (v || 0) - 1);
  };

  return (
    <FormControl
      required={required}
      sx={{
        ...(showControls
          ? {
              '& fieldset': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }
          : {}),
        borderRadius: 1,
        ...sx,
      }}
      {...props}
      fullWidth={fullWidth}
    >
      {shrink && (
        <InputLabel htmlFor="input-id-weird" shrink>
          {label}
        </InputLabel>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: 'auto' }}>
        <OutlinedInput
          name={name}
          notched={shrink}
          type="text"
          placeholder={shrink ? '' : label}
          inputProps={{
            inputMode: 'numeric',
          }}
          id="input-id-weird"
          aria-describedby={helperText}
          label={label}
          value={value}
          fullWidth={fullWidth}
          onChange={handleChange}
        />
        {showControls && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {flipControls ? (
              <>
                <Button
                  sx={{
                    ...commonStyles,
                    ...topButtonStyles,
                    color: '#161C24',
                  }}
                  onClick={increment}
                >
                  +
                </Button>
                <Divider />
                <Button
                  sx={{
                    ...commonStyles,
                    ...bottomButtonStyles,
                    color: '#919EAB',
                  }}
                  onClick={decrement}
                >
                  -
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{
                    ...commonStyles,
                    ...topButtonStyles,
                    color: '#161C24',
                  }}
                  onClick={increment}
                >
                  +
                </Button>
                <Divider />
                <Button
                  sx={{
                    ...commonStyles,
                    ...bottomButtonStyles,
                    color: '#919EAB',
                  }}
                  onClick={decrement}
                >
                  -
                </Button>
              </>
            )}
          </Box>
        )}
      </Box>

      {helperText && <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>}
    </FormControl>
  );
};
export default NumberInput;
