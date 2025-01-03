import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Box,
  Badge,
} from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position='sticky'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant='h6' component='div'>
          Highcharts Tuts
        </Typography>
        <Divider
          orientation='vertical'
          flexItem
          sx={{ margin: 2, bgcolor: 'white' }}
        />
        <Typography variant='body1' sx={{ flexGrow: 1 }}>
          Welcome to Highcharts tuts
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton title='Notifications' color='secondary'>
          {/* <Badge badgeContent={4} color='error'>
            <NotificationsIcon />
          </Badge> */}
        </IconButton>
        <IconButton title='Settings' color='secondary'>
          {/* <SettingsIcon /> */}
        </IconButton>
        <IconButton title='Acount' color='secondary'>
          {/* <AccountCircleIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
