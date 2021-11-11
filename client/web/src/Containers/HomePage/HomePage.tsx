import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { clearLocalStorage, isAuthenticated } from '../../Services';
import { Box, Button } from '@material-ui/core';
import { CREATE_PROJECT, LOGIN, PROJECT } from '../../Routes';

const HomePage: FC<RouteComponentProps> = (props) => {
  const { history } = props;
  if (!isAuthenticated()) {
    history.push(LOGIN);
  } else {
    history.push(PROJECT);
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
