import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdminLogin, AdminDashboard, PrivateRoute } from './components';

const App = () => (
  <Switch>
    <Route exact path="/admin/login" component={AdminLogin} />
    <PrivateRoute component={AdminDashboard} path="/admin/dashboard" exact />
  </Switch>
);

export default App;
