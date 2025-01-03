import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, createTheme } from '@mui/material';

import { Header, SideNav } from './components';
import LineChart from './pages/LineChart';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flex: 1 }}>
            <SideNav />
            <Box
              component='main'
              sx={{
                flexGrow: 1, // Let main content take up the remaining space
                p: 2, // Padding
                overflow: 'auto', // Prevent overflow
              }}
            >
              <Routes>
                <Route path='/' element={<LineChart />} />
                {/* Catch-all route for 404 */}
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </>
  );
};

export default App;
