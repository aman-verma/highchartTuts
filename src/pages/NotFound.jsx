import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'neutral.light',
      }}
    >
      <Typography variant='h1' sx={{ fontSize: '5rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant='h6' sx={{ mb: 3 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant='contained'
        component={Link}
        to='/'
        sx={{
          mt: 2,
          px: 4,
          py: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

export default NotFound;
