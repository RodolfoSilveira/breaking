import { AppContexts } from 'app.contexts';
import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import Routes from 'routes';
import reportWebVitals from './reportWebVitals';
import 'assets/fonts/index.css';

const swrConfigs = { revalidateOnFocus: true, shouldRetryOnError: false };

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfigs}>
      <AppContexts>
        <Routes />
      </AppContexts>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
