import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './stateProvider';
import { initialState } from './state';
import { appIOFactory } from './appIO';

ReactDOM.render(
  <StateProvider initialState={initialState} appIOFactory={appIOFactory}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);
