import { Button, ButtonProps, SxProps, Theme } from '@mui/material';
import { forwardRef } from 'react';

const buttonStyles: SxProps<Theme> = {
  backgroundColor: '#ff5252',
  '&:hover': {
    backgroundColor: '#ff1744',
  },
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  height: '48px',
  borderRadius: '8px',
  padding: '14px 32px',
};

export const StyledButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const combinedSx: SxProps<Theme> = {
      ...buttonStyles,
      ...(props.sx as SxProps<Theme>),
    };

    return <Button variant="contained" {...props} ref={ref} sx={combinedSx} />;
  }
);

StyledButton.displayName = 'StyledButton';
