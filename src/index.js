import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, browserHistory, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ),
  document.getElementById('root')
);
