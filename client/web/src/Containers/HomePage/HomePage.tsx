import React, { FC } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { clearLocalStorage } from '../../Services';
import { Box, Button } from '@material-ui/core';
import { CREATE_PROJECT, LOGIN } from '../../Routes';

const HomePage: FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const logout = () => {
    clearLocalStorage();
    history.push(LOGIN);
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
