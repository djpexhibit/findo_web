import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/homepage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
  </Route>
);
