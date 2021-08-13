import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

import './i18n';
import './index.css';
import App from './App';
import Provider from './Providers';
import GlobalSnackbar from './Components/GlobalSnackbar';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import theme from './Theme';
import { initializeFirebase } from './Utils/firebase';
initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <Provider >
      <GlobalSnackbar />
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
