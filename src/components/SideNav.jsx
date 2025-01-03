import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, Box } from '@mui/material';

const drawerWidth = 240;

const SideNav = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Drawer
      variant='persistent'
      open={openMenu}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px', // Offset by the height of the Header (AppBar)
        },
      }}
    >
      <Box>
        <List sx={{ p: 0 }}>
          {/* Dashboard Link */}
          <ListItem
            component={Link}
            to='/'
            sx={{
              bgcolor: location.pathname === '/' ? '#1976d2' : 'transparent',
              color: location.pathname === '/' ? '#fff' : 'inherit',
              borderRadius: 0,
              '&:hover': {
                color: location.pathname === '/' ? '#fff' : '#1976d2',
              },
            }}
          >
            <ListItemText primary='Line Chart' />
          </ListItem>

          {/* Profile Link */}
          <ListItem
            component={Link}
            to='/profile'
            sx={{
              bgcolor:
                location.pathname === '/profile' ? '#1976d2' : 'transparent',
              color: location.pathname === '/profile' ? '#fff' : 'inherit',
              borderRadius: 0,
              '&:hover': {
                color: location.pathname === '/profile' ? '#fff' : '#1976d2',
              },
            }}
          >
            <ListItemText primary='Profile' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
