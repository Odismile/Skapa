import React, { FC } from 'react';
import { Redirect, Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';

import { ROUTES, UNAUTHORIZED } from './Routes';
import { RouteInterface } from './Interfaces/Route';
import PrivateRoute from './Components/PrivateRoute';
import NotFound from './Containers/Errors/NotFound';
import Unauthorized from './Containers/Errors/Unauthorized';

const App: FC<RouteComponentProps> = (props) => {
  const { history } = props;

  return (
    <>
      <Switch>
        <Route exact path={UNAUTHORIZED} component={Unauthorized} />
        {ROUTES.map((route: RouteInterface) =>
          route.private ? (
            <PrivateRoute exact key={route.key} path={route.route} component={route.component} role={route.roles} />
          ) : (
            <Route exact key={route.key} path={route.route} component={route.component} />
          ),
        )}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default withRouter(App);
