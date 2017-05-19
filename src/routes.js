import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/homepage/HomePage';

// Route Path is always your main display
// Nested in the Path are the children needed to change
export default (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  </Route>
);
