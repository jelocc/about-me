import './App.scss';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Card, CardMedia, CardContent, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';

function App() {
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const projectPage = document.querySelector('.projectPage');
      const aboutPage = document.querySelector('.aboutPage');
      if (window.scrollY > 500) {
        projectPage.style.visibility = 'visible';
        aboutPage.style.visibility = 'visible';
      } else {
        projectPage.style.visibility = 'hidden';
        aboutPage.style.visibility = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  fontSize: '18px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> Home</Button> 
                 <Button color="inherit" sx={{
                  fontSize: '18px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> About</Button> 
                <Button color="inherit" sx={{
                  fontSize: '18px',
                  '&:hover' : {
                    color: '#61adfb'
                  }
                }}> Projects</Button> 
               
                <Button color="inherit" sx={{
                  fontSize: '18px',
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
                    <IconButton color="inherit" href="https://linkedin.com/in/ramil-rosal-025983363" target="_blank" sx={{
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
        <Box className="homePage" marginTop = '250px' width="50%"sx={{
        }}>
          <p className="headingGreet">Hey there! {String.fromCodePoint(0x1F44B, 0x1F3FC)}</p>
          <h1 className="heading">I am KING <br /> a Software Engineer.</h1>
          <br /><h4 className="introDesc"> I am a Computer Science Graduate. I create clean, modern, and responsive projects. </h4>
        </Box>

        <Box className="aboutPage" marginTop = '250px' width="100%"sx={{
          visibility: 'hidden',
          p: 4
        }}>

        </Box>

        <Box className="projectPage" marginTop = '250px' width="100%"sx={{
          visibility: 'hidden',
          p: 4
        }}>
          <Card sx={{ 
            height: '100%',
            borderRadius: '2.5%'
            }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/img/HydroFlux-image.png"
                  alt="HydroFlux Image"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Project Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a description of your project. You can add details about the technologies used,
                    features implemented, and any other relevant information.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>

      </header>
    </div>
    
  );
}

export default App;
