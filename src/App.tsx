import React from 'react';
import Box from '@material-ui/core/Box'
import WindowSplitter from './WindowSplitter'
import Typography from '@material-ui/core/Typography'

import './App.css';

function App() {
  return (
    <div className="App">
      <Box
        bgcolor="primary.main"
        boxShadow={2}
        color="primary.contrastText"
        component="header"
        p={1}
      >
        <Typography variant="h4" component="h1">Window Splitter</Typography>
      </Box>
      <main>
        <Box>
          <Box m={1} p={1}>
            <Typography variant="h5" component="h3">Horizontal Splitting</Typography>
          </Box>
          <WindowSplitter className="WindowSplitter" orientation="horizontal">
            <Box boxShadow={2}>
              <Typography>One</Typography>
            </Box>
            <Box boxShadow={2}>
              <Typography>Two</Typography>
            </Box>
            <Box boxShadow={2}>
              <Typography>Three</Typography>
            </Box>
          </WindowSplitter>
        </Box>
        <Box>
          <Box m={1} p={1}>
            <Typography variant="h5" component="h3">Vertical Splitting</Typography>
          </Box>
          <WindowSplitter className="WindowSplitter" orientation="vertical">
            <Box p={1} boxShadow={2}>
              <Typography>One</Typography>
            </Box>
            <Box p={1} boxShadow={2}>
              <Typography>Two</Typography>
            </Box>
            <Box p={1} boxShadow={2}>
              <Typography>Three</Typography>
            </Box>
          </WindowSplitter>
        </Box>
      </main>
    </div>
  );
}

export default App;
