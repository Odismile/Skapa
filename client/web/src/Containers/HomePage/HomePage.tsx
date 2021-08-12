import React, { FC } from 'react';
import { Redirect, RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { clearLocalStorage } from '../../Services';
import { Button } from '@material-ui/core';
import { LOGIN } from '../../Routes';

const HomePage: FC = () => {
  const history = useHistory();
  const logout = () => {
    clearLocalStorage();
    history.push(LOGIN);
  };
  return <Button onClick={logout}>Logout</Button>;
};

export default withRouter(HomePage);
