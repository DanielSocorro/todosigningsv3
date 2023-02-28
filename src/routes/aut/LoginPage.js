import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button 
      sx={{
        background: 'white',
        color: 'black',
        fontSize: '2.4rem',
        borderRadius: '60px',
        bottom: '30%',
        fontWeight:'bolder',
        left: '31%',
        marginTop: '53rem',
        textTransform: 'inherit',
        padding: '56px',
        height: '117px',
      }}             
      onClick={() => loginWithRedirect()}
    >
      Login with Gmail
    </Button>
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
        backgroundImage: 'url(https://i.ibb.co/WBYMGdX/manuntd.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '60%',
          width: '40%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
        }}
      />
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
      <h1
        style={{
          position: 'absolute',
          top: '31%',
          left: '82%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'white',
          fontSize: '3.1rem',
          width: '30rem',
        }}
      >
        Manchester United Signing's app
      </h1>
     
    <LoginButton />
    </Box>
  </ThemeProvider>
);
}