import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGetAdminQuery } from '../../redux/services/adminApi';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const clientId = localStorage.getItem('clientId');
  const { isError } = useGetAdminQuery(clientId);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        !isError ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
