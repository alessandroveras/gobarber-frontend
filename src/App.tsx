// libs
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// hooks
import AppProvider from './hooks';

// routes
import Routes from './routes';

// app
import GlobalStyle from './stytles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);
export default App;
