import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global/style';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <Router basename={process.env.NODE_ENV === 'production' ? '/' : '/'}>
      <GlobalStyle />
      <Routes />
    </Router>
  </>
);

export default App;
