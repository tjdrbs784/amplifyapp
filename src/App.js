import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

<<<<<<< HEAD
export default withAuthenticator(App);
=======
export default withAuthenticator(App);
>>>>>>> eab9efa5c508b4d3bc7567a54c377d0fc03e4da4
