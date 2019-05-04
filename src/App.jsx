import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Register from './components/Register';

const App = () => (
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/:id" component={Dashboard} />
  </Switch>
);

export default App;
