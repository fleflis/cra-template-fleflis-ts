import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import themeProps from './global/themeProps';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeProps}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
