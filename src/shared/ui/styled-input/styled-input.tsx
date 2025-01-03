import { TextField, TextFieldProps, SxProps, Theme } from '@mui/material';
import { forwardRef } from 'react';

const inputStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiFormHelperText-root': { color: '#ff1744' },
};

export const StyledInput = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const combinedSx: SxProps<Theme> = {
      ...inputStyles,
      ...(props.sx as SxProps<Theme>),
    };

    return <TextField {...props} ref={ref} sx={combinedSx} />;
  }
);

StyledInput.displayName = 'StyledInput';
