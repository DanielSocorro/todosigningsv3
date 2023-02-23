import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './routes/App';
import './index.css';

ReactDOM.render(
  <Auth0Provider 
  domain='dev-hjs65pczimu0a3kk.us.auth0.com' 
  clientId='UmTxeNxeI1tUi95prZQUSwOoOBLespeo'
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);