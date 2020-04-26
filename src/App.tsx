// libs
import React from 'react';

// pages
import SignIn from './pages/SignIn';

import SignUp from './pages/SignUp'; //eslint-disable-line

// contexts
import { AuthProvider } from './hooks/AuthContext';

// app
import GlobalStyle from './stytles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
