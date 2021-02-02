//import logo from './images/logos/png10.png';
import React from 'react';
import './App.css';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
import Routes from './Routes';

// import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">

      {/* <AmplifySignOut /> */}

      <Routes />
    </div>
  );
}

// export default withAuthenticator(App);
export default App;
