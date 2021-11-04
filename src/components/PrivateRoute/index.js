import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAdminLoged = useSelector((state) => state.admin.isLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdminLoged ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  );
};

export default PrivateRoute;
