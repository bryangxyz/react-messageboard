import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, browserHistory, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
);
