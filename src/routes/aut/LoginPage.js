import React from "react";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
/* import { useState } from "react"; */


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="contained" onClick={() => loginWithRedirect()}>Login</Button>
};

