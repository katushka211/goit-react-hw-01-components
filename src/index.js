import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    lightgrey: '#e0e0ef',
    darkgrey: '#747774',
    light: '#f5f5f8',
    white: '#fff',
    black: '#212122',
    textgrey: '#9b9ba0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
