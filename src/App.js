import './App.scss';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="sticky" sx={{ 
          backgroundColor: 'rgba(255, 0, 0, 0.2)', 
          borderRadius: '25px', 
          width: '70%', 
          margin: '10px auto' 
        }}>
          <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              <Avatar 
                alt="Hanni" 
                src="/img/hanni baby.png" 
                sx={{ width: 50, height: 50, marginRight: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
              </Box>
            </Box>
            <Box>
              <IconButton color="inherit" href="#">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <div className="heading"> 
          <p className="headingGreet"> Hey there!
          {String.fromCodePoint(0x1F44B, 0x1F3FC)}
          </p>
          <h1>I am KING <br /> an upcoming Software Engineer.</h1>
          <br /><h4 className="introDesc"> I am a Computer Science Graduate. <br />Looking to learn a lot about Software Development. </h4>
        </div>
      </header>
    </div>
    
  );
}

export default App;
