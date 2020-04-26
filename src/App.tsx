// libs
import React from 'react';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; //eslint-disable-line

// hooks
import AppProvider from './hooks';

// app
import GlobalStyle from './stytles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);
export default App;
