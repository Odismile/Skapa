import React, { FC } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { clearLocalStorage } from '../../Services';
import { Button } from '@material-ui/core';
import { LOGIN } from '../../Routes';

const HomePage: FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const logout = () => {
    clearLocalStorage();
    history.push(LOGIN);
  };
  return <Button onClick={logout}>Logout</Button>;
};

export default withRouter(HomePage);
