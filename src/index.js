import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    lightgray: '#e0e0ef',
    darkgray: '#747774',
    light: '#f5f5f8',
    white: '#fff',
    black: '#212122',
    textgray: '#9b9ba0',
    green: '#10b539',
    red: '#FF0000',
    blue: '	#20B2AA',
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
