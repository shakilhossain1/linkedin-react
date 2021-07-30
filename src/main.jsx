import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
