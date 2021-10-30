import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminLogin } from './components';

const App = () => (
  <Switch>
      <Route exact path='/admin-login' component={AdminLogin} />
  </Switch>
);

export default App;
