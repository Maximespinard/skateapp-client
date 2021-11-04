import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminLogin, AdminDashboard } from './components';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Switch>
    <Route exact path="/admin/login" component={AdminLogin} />
    <PrivateRoute component={AdminDashboard} path="/admin/dashboard" exact />
  </Switch>
);

export default App;
