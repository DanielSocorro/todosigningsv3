import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className='btn'
              
      onClick={() => loginWithRedirect()}
    >
      Login with Gmail
    </button>
  );
}

export function SignInSide() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(https://i.ibb.co/WBYMGdX/manuntd.jpg)',
        backgroundRepeat: 'no-repeat',
     
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <div className='background'/>
      <img 
        src="https://i.ibb.co/prrxrDr/manchester-united-fc-logo.png"
        alt="Manchester United logo"
        className='logomu'
      />
      <img
        src="https://i.ibb.co/Wzndr52/android-chrome-512x512.png"
        alt="Android Chrome logo"
        className='logods'
      />
      <h1 className='title'>
        Manchester United signing's app
      </h1>
     
    <LoginButton />
    </Box>
  </ThemeProvider>
);
}