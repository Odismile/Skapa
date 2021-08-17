import React, { FC } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { clearLocalStorage, isAuthenticated, removeAccessToken } from '../../Services';
import { Box, Button } from '@material-ui/core';
import { CREATE_PROJECT, LOGIN } from '../../Routes';
import { forceLogout } from '../../Hooks/useForceLogout';

const HomePage: FC<RouteComponentProps> = (props) => {
  const { history } = props;
  if (!isAuthenticated()) {
    history.push(LOGIN);
  } else {
    history.push(CREATE_PROJECT);
  }
  const logout = () => {
    clearLocalStorage();
    window.location.reload();
  };

  const goToCreateProject = () => {
    history.push(CREATE_PROJECT);
  };

  return (
    <Box>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={goToCreateProject}>Go to create project</Button>
    </Box>
  );
};

export default withRouter(HomePage);
