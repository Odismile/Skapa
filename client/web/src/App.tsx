import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import NotFound from './Containers/Errors/NotFound';
import Unauthorized from './Containers/Errors/Unauthorized';
import { RouteInterface } from './Interfaces/Route';
import { ROUTES, UNAUTHORIZED } from './Routes';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme/index';
import { initializeFirebase } from './Utils/firebase';

const App: FC<RouteComponentProps> = (props) => {
  //const { history } = props;


  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </>
  );
};

export default withRouter(App);
