import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';

import { LOGIN } from '../../Routes';
import { isAuthenticated } from '../../Services/LocalStorage';

interface PrivateRouteProps {
  component: any;
  [key: string]: any;
}

/**
 * Private route component
 *
 * @param param PrivateRouteProps
 * @returns
 */
const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...props }) => {
  const { profil , loading} = useCurrentUser()
  if (!isAuthenticated() || (!loading && isAuthenticated() && !profil)) {
    <Redirect to={LOGIN} />;
  }
  return <Route {...props} render={(routeProps: any) => <Component {...routeProps} />} />;
};

export default PrivateRoute;
