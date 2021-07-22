import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles';
import App from './App';

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
