import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { HOMEPAGE } from '../../Routes';
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
  if (!isAuthenticated()) {
    <Redirect to={HOMEPAGE} />;
  }
  return <Route {...props} render={(routeProps: any) => <Component {...routeProps} />} />;
};

export default PrivateRoute;
