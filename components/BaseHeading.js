import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Heading = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.primary.main,
  lineHeight: '75px',
  fontSize: '1.5rem',
}));

export default function BaseHeading({ content }) {

  return (
    <Heading variant="h4" 
      textTransform="uppercase"
      color='theme.palette.primary.main'>
      { content }
    </Heading>
  );
}