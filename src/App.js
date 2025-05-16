import './App.scss';
import React, { useState }from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';

function App() {
  const [showTabs, setShowTabs] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="sticky" color="primary" sx = {{
          backgroundColor: 'rgba(255,0,0,0.2)', 
          borderRadius: '25px',
          width: '70%',
          padding: '0 16px',
          boxSizing: 'border-box'
          }}>
            <Toolbar sx= {{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}> <Box className ="navBarLogo"sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flex: '0, 0, auto'
            }}>
                <Avatar alt="Hanni" src="img/hanni baby.png"/>
                </Box>
                <Box className="navBarTabs" sx={{
              display: { xs: 'none', sm: 'none', md: 'flex'},
              alignItems: 'center',
              gap: 2,
              flex: 1,
              overflow: 'hidden',
              justifyContent: 'center'
            }}>
                <Button color="inherit" sx={{
                  fontSize: '15px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> Home</Button> 
                <Button color="inherit" sx={{
                  fontSize: '15px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> Projects</Button> 
                <Button color="inherit" sx={{
                  fontSize: '15px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> About</Button> 
                <Button color="inherit" sx={{
                  fontSize: '15px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> Contact</Button> 
                </Box>
                <Box className="navBarLinks" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    flex: '0 0 auto'
                    }}> <IconButton color="inherit" href="https://github.com/jelocc" target="_blank" sx={{
                       '&:hover' : {
                    color: '#61adfb'
                       }
                    }}>
                        <GitHubIcon sx={{
                          fontSize: '30px'
                        }}/>
                    </IconButton>
                    <IconButton color="inherit" href="linkedin.com/in/ramil-rosal-025983363" target="_blank" sx={{
                       '&:hover' : {
                    color: '#61adfb'
                       }
                    }}>
                        <LinkedInIcon sx={{
                          fontSize: '30px'
                        }}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <div className="heading"> 
          <p className="headingGreet"> Hey there!
          {String.fromCodePoint(0x1F44B, 0x1F3FC)}
          </p>
          <h1>I am KING <br /> a Software Engineer.</h1>
          <br /><h4 className="introDesc"> I am a Computer Science Graduate. <br />Looking to learn a lot about Software Development. </h4>
        </div>

      </header>
    </div>
    
  );
}

export default App;
